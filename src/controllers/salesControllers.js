const salesService = require('../services/salesService');
const productsServices = require('../services/productsService');

const getAllSaleProduct = async (request, response) => {
  const result = await salesService.getAllSaleProduct();
  return response.status(200).json(result);
};

const getByIdSaleProduct = async (request, response) => {
  const { id } = request.params;
  const result = await salesService.getByIdSaleProduct(id);
  return response.status(result.code).json(result.message);
};

const insertSaleProduct = async (request, response) => {
  const { message: saleId }= await salesService.insertSale();
  await  productsServices.insertProduct(request.body);
  const result = {id: saleId, itemsSold: request.body};
  return response.status(201).json(result);
}

module.exports = {
  getAllSaleProduct, getByIdSaleProduct, insertSaleProduct
};
