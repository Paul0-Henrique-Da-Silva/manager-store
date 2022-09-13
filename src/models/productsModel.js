const conn = require('./conn');

const getAll = async () => {
  const [result] = await conn.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

const getById = async (id) => {
  const [[result]] = await conn.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [id],
  );
  return result;  
};

module.exports = {
  getAll, getById,
};