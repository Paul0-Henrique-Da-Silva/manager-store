const router = require('express').Router();
const salesControllers = require('../controllers/salesControllers');

router.get('/', salesControllers.getAllSaleProduct);
router.get('/:id', salesControllers.getByIdSaleProduct);
router.post('/',salesControllers.insertSaleProduct)

module.exports = router;
