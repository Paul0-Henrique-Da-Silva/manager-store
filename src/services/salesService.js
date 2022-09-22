const saleModel = require('../models/saleModel');

const getAll = async () => {
  const results = saleModel.getAll();
  return results;
};

const getById = async (id) => {
  const result = await saleModel.getById(id);
  return result.length === 0
    ? { code: 404, message: { message: 'Sale not found' } }
    : { code: 200, message: { message: result } };
};

module.exports = {
  getAll, getById,
};
