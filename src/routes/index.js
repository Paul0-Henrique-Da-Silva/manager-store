const router = require('express').Router();
const productsRouter = require('./productsRouter');

router.use('/products', productsRouter);

module.exports = router;
