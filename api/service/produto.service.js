const produtoRepository = require("../repository/produto.repository");

class ProdutoService {
  constructor() {}

  async getProdutos() {
    return await produtoRepository.getProdutos();
  }

  async createProduto(produto) {
    return await produtoRepository.createProduto(produto);
  }

  async updateProduto(produto) {
    return await produtoRepository.updateProduto(produto);
  }

  async deleteProduto(produtoId) {
    return await produtoRepository.deleteProduto(produtoId);
  }
}

module.exports = new ProdutoService();
