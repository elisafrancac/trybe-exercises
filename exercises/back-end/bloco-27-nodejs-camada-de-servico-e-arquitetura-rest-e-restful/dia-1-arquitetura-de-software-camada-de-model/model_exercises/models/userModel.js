const connection = require('./connection');

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
}

const isValid = ({ firstName, lastName, email, password }) => {
    const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
    const fields = [firstName, lastName, email, password];

    if (fields.includes(undefined)
        || fields.includes(null) 
        || fields.includes('')) {
            return false;
    }

    return PASSWORD_REGEX.test(password);
}

const createUser = async ({ firstName, lastName, email, password }) => {
    const db = await connection().then((db) => db.collection('users'));
    db.insertOne({ firstName, lastName, email, password })
        .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

const getUsers = async () => {
    const db = await connection().then((db) => db.collection('users')
    .find().toArray());

    const formattedDb = db.map((item) => formatUser(item));

    return formattedDb;
}

module.exports = {
    isValid,
    createUser,
    getUsers,
};
