const connection = require('./connection');
const Joi = require('joi');
const { ObjectId } = require('mongodb');

const formatUser = (document) => {
    const {
        _id,
        password,
        ...user
    } = document;

    const formattedResult = {
        id: _id,
        ...user,
    };

    return formattedResult;
};

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).messages({
    'any.required': 'O campo {{:id=="#label" }} é obrigatório',
    'string.min': 'O campo {{: id=="#label" }} deve ter, pelo menos, {{: id=="#limit" }} caracteres',
    'string.email': 'Informe um email válido no campo {{: id=="#label" }}',
  });

const isValid = (userData) => {
    return userSchema.validate(userData);
};

const createUser = async ({ firstName, lastName, email, password }) => {
    const db = await connection().then((db) => db.collection('users'));
    db.insertOne({ firstName, lastName, email, password })
        .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
};


const getUsers = async () => {
    const db = await connection().then((db) => db.collection('users')
        .find().toArray());

    const formattedDb = db.map((item) => formatUser(item));

    return formattedDb;
};

const getUser = async (id) => {

    if (!ObjectId.isValid(id)) {
        return null;
    };

    const user = await connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));

    if (!user) return null;

    return formatUser(user);
};

const updateUser = async (req) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    if (!ObjectId.isValid(id)) return null;

    const updatedUser = await connection()
    .then((db) => {
        const userId = new ObjectId(id);
        const newData = { firstName, lastName, email, password };
        return db.collection('users')
        .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false })
        .then((result) => {
            return result.value});
    });

    if (!updatedUser) return null;

    return formatUser(await connection().then((db) => db.collection('users')
    .findOne(new ObjectId(id))));
};

module.exports = {
    isValid,
    createUser,
    getUsers,
    getUser,
    updateUser,
};
