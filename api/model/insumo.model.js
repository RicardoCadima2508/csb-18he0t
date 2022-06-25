module.exports = (sequelize, DataTypes, Model) => {
  class Insumo extends Model {}

  Insumo.init(
    {
      // Model attributes are defined here
      Nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
      },
      unidade: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
      },
      fichaTecnica: {
        type: DataTypes.STRING //lista de insumos
        // allowNull defaults to true
      },
      quantidade: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
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
      modelName: "insumos" // We need to choose the model name
    }
  );

  return Insumo;
};
