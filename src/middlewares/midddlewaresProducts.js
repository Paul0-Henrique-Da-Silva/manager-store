const productsModel = require('../models/productsModel');

const nameValidate = (request, response, next) => {
  const { name } = request.body;
  const requiredName = '"name" is required';
  const lengthName = '"name" length must be at least 5 characters long';
  if (!name) return response.status(400).json({ message: requiredName });
  if (name.length < 5) return response.status(422).json({ code: 422, message: lengthName });
  next();
};

const validateById = async (request, response, next) => {
  const { id } = request.params;
  const product = await productsModel.getById(id);

  if (!product) {
    return response.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = { nameValidate, validateById };