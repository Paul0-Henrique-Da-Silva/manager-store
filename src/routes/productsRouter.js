const express = require('express');
const productsControllers = require('../controllers/productsControllers');


const router = express.Router();

router.get('/', productsControllers.getAll);

module.exports = router;