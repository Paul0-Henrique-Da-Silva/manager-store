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

const insertProduct = async (name) => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return insertId;
};

const updateById = async (productName, productId) => {
  const [{ result }] = await conn.execute(
    `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`,
    [productName, productId],
  );
  return result;
};

const deleteById = async (productId) => {
  const [{ result }] = await conn.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ?`,
    [productId],
  );
  return result;
};

module.exports = {
  getAll, getById, insertProduct, updateById, deleteById,
};