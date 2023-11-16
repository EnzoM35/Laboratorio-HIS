const express = require('express');
const router = express.Router();

// Ruta para la vista de inicio de sesión
router.get('/login', (req, res) => {
  res.render('Login/login'); // Renderiza la vista "login.pug" desde la carpeta "views"
});

// Ruta para la vista de registro
router.get('/registro', (req, res) => {
  res.render('Login/registro'); // Renderiza la vista "registro.pug" desde la carpeta "views"
});

module.exports = router;
