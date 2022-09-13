const { expect } = require("chai");
const sinon = require("sinon");

const conn = require("../../../src/models/conn");
const  productsModel  = require("../../../src/models/productsModel");
const { mockGetAll, mockGetById } = require("../controllers/mocks/products.mock");

describe("Teste de unidade do productsModel", function () {
  afterEach(sinon.restore);

  it("Recuperando a lista com todos os produtos", async function () {
    sinon.stub(conn, "execute").resolves([mockGetAll]);
    const result = await productsModel.getAll()
    expect(result).to.deep.equal(mockGetAll);
  });

  it("Recuperando um produto por ID", async function () {
    sinon.stub(conn, "execute").resolves([[mockGetById]]);
    const result = await productsModel.getById(2)
    expect(result).to.deep.equal(mockGetById);
  });
});
