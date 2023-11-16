const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('determinaciones', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDExamen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'examenes',
        key: 'ID'
      }
    },
    NombreDeterminacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UnidadMedida: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ValorMinimo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ValorMaximo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'determinaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "IDExamen",
        using: "BTREE",
        fields: [
          { name: "IDExamen" },
        ]
      },
    ]
  });
};
