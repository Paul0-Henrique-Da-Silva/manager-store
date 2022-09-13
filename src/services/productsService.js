const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await productsModel.getById(id);
  if (!result) return { code: 404, message: { message: 'Product not found' } };
  return { code: 200, message: result };
};

module.exports = { getAll, getById };