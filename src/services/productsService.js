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

const insertProduct = async ({ name }) => {
  const productId = await productsModel.insertProduct(name);
  return { type: null, message: productId };
};

const updateById = async (productName, productId) => {
  await productsModel.updateById(productName, productId);
};

const deleteById = async (productId) => {
  await productsModel.deleteById(productId);
};

module.exports = { getAll, getById, insertProduct, updateById, deleteById };