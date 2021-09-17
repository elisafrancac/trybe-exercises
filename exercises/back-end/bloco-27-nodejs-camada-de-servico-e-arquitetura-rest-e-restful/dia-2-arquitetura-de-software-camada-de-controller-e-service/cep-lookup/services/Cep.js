const { findAddressByCep } = require('../models/Cep');

const REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {

  if (!REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const cep = await findAddressByCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  return cep;
};

module.exports = {
  findAddressByCep,
};
