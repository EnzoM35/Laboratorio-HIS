// require('dotenv').config();

// module.exports = {
//   username: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_DATABASE || "sequelize",
//   host: process.env.DB_HOST || "localhost",
//   dialect: process.env.DB_DIALECT || "mysql",
//   define: {
//     timestamps: false
//   }

// }

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lis'
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});




module.exports = router ;