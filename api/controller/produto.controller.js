const produtoService = require("../service/produto.service");
const logger = require("../logger/api.logger");

class TodoController {
  async getprodutos() {
    logger.info("Controller: getprodutos");
    return await produtoService.getprodutos();
  }

  async createproduto(produto) {
    logger.info("Controller: createproduto", produto);
    return await produtoService.createproduto(produto);
  }

  async updateproduto(produto) {
    logger.info("Controller: updateproduto", produto);
    return await produtoService.updateproduto(produto);
  }

  async deleteproduto(produtoId) {
    logger.info("Controller: deleteproduto", produtoId);
    return await produtoService.deleteproduto(produtoId);
  }
}
module.exports = new TodoController();
