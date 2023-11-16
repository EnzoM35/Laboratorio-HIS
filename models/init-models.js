var DataTypes = require("sequelize").DataTypes;
var _auditoria = require("./auditoria");
var _determinaciones = require("./determinaciones");
var _examenes = require("./examenes");
var _ordenesdetrabajo = require("./ordenesdetrabajo");
var _pacientes = require("./pacientes");
var _resultados = require("./resultados");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var auditoria = _auditoria(sequelize, DataTypes);
  var determinaciones = _determinaciones(sequelize, DataTypes);
  var examenes = _examenes(sequelize, DataTypes);
  var ordenesdetrabajo = _ordenesdetrabajo(sequelize, DataTypes);
  var pacientes = _pacientes(sequelize, DataTypes);
  var resultados = _resultados(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  resultados.belongsTo(determinaciones, { as: "IDDeterminacion_determinacione", foreignKey: "IDDeterminacion"});
  determinaciones.hasMany(resultados, { as: "resultados", foreignKey: "IDDeterminacion"});
  determinaciones.belongsTo(examenes, { as: "IDExamen_examene", foreignKey: "IDExamen"});
  examenes.hasMany(determinaciones, { as: "determinaciones", foreignKey: "IDExamen"});
  resultados.belongsTo(ordenesdetrabajo, { as: "IDOrdenTrabajo_ordenesdetrabajo", foreignKey: "IDOrdenTrabajo"});
  ordenesdetrabajo.hasMany(resultados, { as: "resultados", foreignKey: "IDOrdenTrabajo"});
  ordenesdetrabajo.belongsTo(pacientes, { as: "IDPaciente_paciente", foreignKey: "IDPaciente"});
  pacientes.hasMany(ordenesdetrabajo, { as: "ordenesdetrabajos", foreignKey: "IDPaciente"});
  auditoria.belongsTo(usuarios, { as: "IDUsuario_usuario", foreignKey: "IDUsuario"});
  usuarios.hasMany(auditoria, { as: "auditoria", foreignKey: "IDUsuario"});

  return {
    auditoria,
    determinaciones,
    examenes,
    ordenesdetrabajo,
    pacientes,
    resultados,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
