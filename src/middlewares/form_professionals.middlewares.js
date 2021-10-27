const { body } = require("express-validator");
const { showErrors } = require("./show_errors.middlewares");
const {
  professionalExtractAtributes,
} = require("../middlewares/professionals.middlewares");

// Lista de middlewares para el post del profesional
const post_middlewares_professional = [
  professionalExtractAtributes,
  body("personal_info.fullname", "El nombre no debe contener números o signos")
    .isAlpha()
    .isLength({ min: 5, max: 150 }),
  body("personal_info.dni", "El formato del dni es incorrecto").isLength({min: 8}),
  body("personal_info.address", "No es una dirección válida.").isAscii(),
  body("contact_info.email", "El email ingresado no contiene un formato correcto").isEmail(),
  body("contact_info.phone", "No es un móvil válido").isMobilePhone(),

  showErrors,
];

module.exports = { post_middlewares_professional };
