const produtoModel = require("./produto.model");

module.exports = (sequelize, DataTypes, Model) => {
  class Produtos extends Model {}

  Produtos.init(
    {
      // Model attributes are defined here
      Nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoria: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      unidade: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      fichaTecnica: {
        type: DataTypes.STRING //lista de insumos
        // allowNull defaults to true
      },
      quantidade: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      status: {
        type: DataTypes.STRING
      },
      createdate: {
        type: DataTypes.DATE
        // allowNull defaults to true
      },
      updateddate: {
        type: DataTypes.DATE
        // allowNull defaults to true
      },
      createdby: {
        type: DataTypes.STRING
      },
      updatedby: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "produtos" // We need to choose the model name
    }
  );

  return Produtos;
};
