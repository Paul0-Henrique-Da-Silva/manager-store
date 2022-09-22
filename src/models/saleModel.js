const conn = require('./conn');

const getAll = async () => {
  const [result] = await conn.execute(
    `SELECT sale_id, date, product_id, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS sa ON sp.sale_id = sa.id`,
  );
  return result;
};

const getById = async (saleId) => {
  const [result] = await conn.execute(
    `SELECT date, product_id, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS sa ON sp.sale_id = sa.id WHERE id = ?`,
    [saleId],
  );
  return result;
};

module.exports = {
  getAll, getById,
};
