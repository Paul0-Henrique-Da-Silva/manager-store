const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const productsService = require("../../../src/services/productsService");
const productsControllers = require('../../../src/controllers/productsControllers')
const { mockGetAll, mockGetById } = require('../controllers/mocks/products.mock');

describe('Teste de unidade do productsModel', () => {
  afterEach(sinon.restore);
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      response.end = sinon.stub().returns(response);
    });

  describe('getAll', () => {     
      sinon.stub(productsService, 'getAll').resolves(mockGetAll)
      it('response successful', async () => {
        await productsControllers.getAll(request, response);
        expect(response.status.calledWith(200)).to.be.true;
        expect(response.json.calledWith(mockGetAll)).to.be.true;
      });
    });
    
  describe('getById', () => {
    before(() => {
      request.params = {};
      sinon.stub(productsService, 'getById')
        .resolves({ code: 200, message: mockGetById });
    });
    it('response successful', async () => {
      await productsControllers.getById(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(mockGetById)).to.be.true;
    });
  });
  });

