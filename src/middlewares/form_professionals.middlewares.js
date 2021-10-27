const { body } = require("express-validator");
const { showErrors } = require("./show_errors.middlewares");
const {
  professionalExtractAtributes,
} = require("../middlewares/professionals.middlewares");

// Lista de middlewares para el post del profesional
const post_middlewares_professional = [
  professionalExtractAtributes,
  body("fullname", "El nombre no debe contener números o signos")
    .isAlpha("es-ES", { ignore: " " })
    .isLength({ min: 10, max: 150 }),
  body("email", "El email ingresado no contiene un formato correcto").isEmail(),
  body("dni", "El formato del dni es incorrecto").isInt(),
  // body("birthdate", "La fecha ingresada no es válida").
  showErrors,
];

module.exports = { post_middlewares_professional };
