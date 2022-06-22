const insumoService = require("../service/insumo.service");
const logger = require("../logger/api.logger");

class TodoController {
  async getinsumos() {
    logger.info("Controller: getinsumos");
    return await insumoService.getinsumos();
  }

  async createinsumo(insumo) {
    logger.info("Controller: createinsumo", insumo);
    return await insumoService.createinsumo(insumo);
  }

  async updateinsumo(insumo) {
    logger.info("Controller: updateinsumo", insumo);
    return await insumoService.updateinsumo(insumo);
  }

  async deleteinsumo(insumoId) {
    logger.info("Controller: deleteinsumo", insumoId);
    return await insumoService.deleteinsumo(insumoId);
  }
}
module.exports = new TodoController();
