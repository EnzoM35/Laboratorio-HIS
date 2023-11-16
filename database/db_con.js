const Sequelize = require('sequelize');
const config = require('./config'); // Importa la configuración desde el archivo config.js

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
  }
);

// Prueba la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos MySQL');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });


module.exports = 
