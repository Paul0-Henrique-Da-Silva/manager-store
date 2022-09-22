const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const middlewares = require('../middlewares/midddlewaresProducts');

const router = express.Router();

router.get('/', productsControllers.getAll);

router.get('/:id', productsControllers.getById);

router.post('/', middlewares.nameValidate, productsControllers.insertProduct);

router.put('/:id', middlewares.validateById, middlewares.nameValidate,
  productsControllers.updateById);

router.delete('/:id', middlewares.validateById, productsControllers.deleteById);  

module.exports = router;