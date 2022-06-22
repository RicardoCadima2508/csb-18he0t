const insumoRepository = require("../repository/insumo.repository");

class InsumoService {
  constructor() {}

  async getInsumo() {
    return await insumoRepository.getInsumos();
  }

  async createInsumo(insumo) {
    return await insumoRepository.createInsumo(insumo);
  }

  async updateInsumo(insumo) {
    return await insumoRepository.updateInsumo(insumo);
  }

  async deleteInsumo(insumoId) {
    return await insumoRepository.deleteInsumo(insumoId);
  }
}

module.exports = new InsumoService();
