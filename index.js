// const express = require('express');
// const app = express();
// const port = 3000;

// app.set('view engine', 'pug'); // Configura Pug como motor de vistas
// app.set('views', __dirname + '/views'); // Establece la carpeta de vistas

// app.get('/', (req, res) => {
//   //res.render('Login/Login', { title: 'Login' }); // Renderiza la vista Pug
//   res.render('Login/registro', { title: 'Registrarse' }); // Renderiza la vista Pug
// });

// app.listen(port, () => {
//   console.log(`Aplicación en ejecución en http://localhost:${port}`);
// });
const express = require('express');
const app = express();
const router = require('./router/router'); // Reemplaza './router' con la ruta correcta de tu archivo router.js

// Configura Express para usar Pug como motor de vistas
app.set('view engine', 'pug');
app.set('views', __dirname + '/views'); // Asegúrate de que las vistas estén en una carpeta llamada "views"

// Middleware para servir archivos estáticos, como Bootstrap y CSS
app.use(express.static(__dirname + '/public')); // Asegúrate de que los recursos estén en una carpeta llamada "public"

// Usa el enrutador
app.use('/', router);

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${port}`);
});



module.exports = router ;
