const salesService = require('../services/salesService');

const getAll = async (request, response) => {
  const result = await salesService.getAll();
  return response.status(200).json(result);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const result = await salesService.getById(id);
  return response.status(result.code).json(result.message);
};

module.exports = {
  getAll, getById,
};
