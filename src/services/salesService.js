const saleModel = require('../models/saleModel');

const getAllSaleProduct = async () => {
  const results = saleModel.getAllSaleProduct();
  return results;
};

const getByIdSaleProduct = async (id) => {
  const result = await saleModel.getByIdSaleProduct(id);
  return result.length === 0
    ? { code: 404, message: { message: 'Sale not found' } }
    : { code: 200, message: { message: result } };
};

const insertSale = async () => {
  const saleId = await saleModel.insertSale();
  return { type: null, message: saleId }
};

module.exports = {
  getAllSaleProduct, getByIdSaleProduct, insertSale
};
