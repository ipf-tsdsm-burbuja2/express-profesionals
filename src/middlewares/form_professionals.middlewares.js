const { body } = require("express-validator");
const { showErrors } = require("./show_errors.middlewares");
const {
  professionalExtractAtributes,
} = require("../middlewares/professionals.middlewares");

// Lista de middlewares para el post del profesional
const post_middlewares_professional = [
  professionalExtractAtributes,
  body("fullname", "El nombre no debe contener números o signos")
    .isAscii("es-ES", { ignore: " " })
    .isLength({ min: 10, max: 150 }),
  // body("dni", "El formato del dni es incorrecto").isNumeric(),
  // body("address", "En la dirección sólo se permiten letras.").isAscii({ ignore: " "}),
  // body("email", "El email ingresado no contiene un formato correcto").isEmail(),
  // body("phone", "No es un móvil válido").isNumeric(),

  showErrors,
];

module.exports = { post_middlewares_professional };
