const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordenesdetrabajo', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDPaciente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pacientes',
        key: 'ID'
      }
    },
    FechaCreacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    Estado: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordenesdetrabajo',
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
        name: "IDPaciente",
        using: "BTREE",
        fields: [
          { name: "IDPaciente" },
        ]
      },
    ]
  });
};
