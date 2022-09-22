const productsServices = require('../services/productsService');

// const REQUEST_BROKEN = 'Saiu algo errado!';
const HTTP_OK = 200;
// const INTERNAL_SERVER_ERROR = 500;

const getAll = async (_request, response) => {
//  try {
   const result = await productsServices.getAll();
   return response.status(HTTP_OK).json(result);
//  } catch (error) {
//    console.log(error);
//    return response.status(INTERNAL_SERVER_ERROR).json({ message: REQUEST_BROKEN });
//  }
};

const getById = async (request, response) => {
  const { id } = request.params;
  // try {
    const result = await productsServices.getById(id);
    return response.status(result.code).json(result.message);
  // } catch (error) {
  //   console.log(error);
  //   return response.status(INTERNAL_SERVER_ERROR).json({ message: REQUEST_BROKEN });
  // }
}; 

const insertProduct = async (request, response) => {
  const product = await productsServices.insertProduct(request.body);
  const productId = await productsServices.getById(product.message);
  return response.status(201).json(productId.message);
};

const updateById = async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;
  await productsServices.updateById(name, id);
  const productById = await productsServices.getById(id);
  return response.status(200).json(productById.message);
};

const deleteById = async (request, response) => {
  const { id } = request.params;
  await productsServices.deleteById(id);
  return response.sendStatus(204);
};

module.exports = {
  getAll, getById, insertProduct, updateById, deleteById,
};
