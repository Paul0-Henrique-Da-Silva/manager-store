const productsRouter = require('express').Router();
const products = require('../controllers/productsControllers');

productsRouter.get('/', products.getAll);

module.exports = productsRouter;
