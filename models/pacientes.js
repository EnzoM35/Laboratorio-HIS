const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pacientes', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NumeroIdentificacion: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "NumeroIdentificacion"
    },
    FechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CorreoElectronico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Diagnostico: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pacientes',
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
        name: "NumeroIdentificacion",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NumeroIdentificacion" },
        ]
      },
    ]
  });
};
