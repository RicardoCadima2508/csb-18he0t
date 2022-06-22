const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class InsumoRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getInsumos() {
    try {
      const insumos = await this.db.insumos.findAll();
      console.log("insumos:::", insumos);
      return insumos;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createInsumo(insumo) {
    let data = {};
    try {
      insumo.createdate = new Date().toISOString();
      data = await this.db.insumos.create(insumo);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateInsumo(insumo) {
    let data = {};
    try {
      insumo.updateddate = new Date().toISOString();
      data = await this.db.insumos.update(
        { ...insumo },
        {
          where: {
            id: insumo.id
          }
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteInsumo(insumoId) {
    let data = {};
    try {
      data = await this.db.insumos.destroy({
        where: {
          id: insumoId
        }
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new InsumoRepository();
