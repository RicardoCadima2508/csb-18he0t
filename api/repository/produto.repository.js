const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class ProdutoRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getProdutos() {
    try {
      const produtos = await this.db.produtos.findAll();
      console.log("produtos:::", produtos);
      return produtos;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createProduto(produto) {
    let data = {};
    try {
      produto.createdate = new Date().toISOString();
      data = await this.db.produtos.create(produto);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateProduto(produto) {
    let data = {};
    try {
      produto.updateddate = new Date().toISOString();
      data = await this.db.produtos.update(
        { ...produto },
        {
          where: {
            id: produto.id
          }
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteProduto(produtoId) {
    let data = {};
    try {
      data = await this.db.produtos.destroy({
        where: {
          id: produtoId
        }
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new ProdutoRepository();
