const conn = require('./conn');

const getAllSaleProduct = async () => {
  const [result] = await conn.execute(
    `SELECT sale_id, date, product_id, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS sa ON sp.sale_id = sa.id`,
  );
  return result;
};

const getByIdSaleProduct = async (saleId) => {
  const [result] = await conn.execute(
    `SELECT date, product_id, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS sa ON sp.sale_id = sa.id WHERE id = ?`,
    [saleId],
  );
  return result;
};

const insertSale = async () => { //DATETIME DEFAULT CURRENT_TIMESTAMP
  const [{ result }] = await conn.execute(
    'INSERT INTO StoreManager.sales VALUE()'
  );
  return result
}


// const insertSaleProduct = async (saleId, itemSold) => {
//   const [{ result }] = await conn.execute(
//     'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE(?,?,?)',
//     [saleId, itemSold.productId, itemSold.quantity],
//   );
//   return result
// }

module.exports = {
  getAllSaleProduct, getByIdSaleProduct, insertSale
};
