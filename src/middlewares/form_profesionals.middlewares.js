const { body } = require("express-validator");
const { showErrors } = require('./show_errors.middlewares');

// Lista de middlewares para el post del profesional
const post_middlewares_professional = [
  body("fullname", "El nombre no debe contener números o signos")
      .isAlpha('es-ES', {ignore: ' '})
      .length({min:10, max:150}),
  body("email", "El email ingresado no contiene un formato correcto").isEmail(),
  // body("birthdate", "La fecha ingresada no es válida").
];

module.exports = { post_middlewares_professional }