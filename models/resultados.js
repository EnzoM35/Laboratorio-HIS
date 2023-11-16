const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resultados', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDDeterminacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'determinaciones',
        key: 'ID'
      }
    },
    IDOrdenTrabajo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ordenesdetrabajo',
        key: 'ID'
      }
    },
    ValorResultado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    FechaHoraResultado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    IDTecnico: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'resultados',
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
        name: "IDDeterminacion",
        using: "BTREE",
        fields: [
          { name: "IDDeterminacion" },
        ]
      },
      {
        name: "IDOrdenTrabajo",
        using: "BTREE",
        fields: [
          { name: "IDOrdenTrabajo" },
        ]
      },
    ]
  });
};
