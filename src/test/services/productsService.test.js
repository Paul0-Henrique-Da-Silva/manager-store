const sinon = require("sinon");
const { expect } = require("chai");

const productsModel = require("../../../src/models/productsModel");
const productsService = require("../../../src/services/productsService");

const { mockGetAll, mockGetById } = require('../controllers/mocks/products.mock');

describe("Teste de unidade do 'productsService' ", function () {
  afterEach(sinon.restore);
  
  describe('Buscando todos os produtos', async () => {  
    before(() => {
      sinon.stub(productsModel, 'getAll').resolves(mockGetAll);
    });
    it('getAll', async () => {
      const result = await productsService.getAll();
      expect(result).equals(mockGetAll);
    })
  });

  describe('Testando fora das condições', async () => {
    before(() => {
      sinon.stub(productsModel, 'getById').resolves(mockGetAll);
    });
    it('getById', async () => {
      const result = await productsService.getById();
      expect(result.message).equals(mockGetAll);
    });
  })
});



