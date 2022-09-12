const productsServices = require('../services/productsService');

const REQUEST_BROKEN = 'Saiu algo errado!';
const HTTP_OK = 200;
const INTERNAL_SERVER_ERROR = 500;
const getAll = async (_request, response) => {
 try {
   const result = await productsServices.getAll();
   return result.status(HTTP_OK).json(result);
 } catch (error) {
   console.log(error);
   return response.status(INTERNAL_SERVER_ERROR).json({ message: REQUEST_BROKEN });
 }
};

module.exports = getAll;
