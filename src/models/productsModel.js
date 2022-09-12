const conn = require('./conn');

const getAll = async () => {
  const [result] = await conn.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

module.exports = getAll;