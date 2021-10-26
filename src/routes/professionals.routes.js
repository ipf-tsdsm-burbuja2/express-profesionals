const route = require("express").Router();

//-----------Middlewares-------------------
const { validar_jwt } = require("../middlewares/validar_jwt.middlewares");
const { verificarActivo } = require("../middlewares/user.middlewares");

//----------Controladores-----------------
const {
  getProfesionales,
  getProfesional,
  createProfesional,
  updateProfesional,
  deleteProfesional,
} = require("../controllers/professionals.controllers");

//---------------Rutas---------------------
// publicas
route.get("/", getProfesionales);
route.get("/:id", getProfesional);

// privadas // [validar_jwt, verificarActivo],
route.post("/", createProfesional);
route.put("/:id", updateProfesional);
// route.put("/password/:id", [validar_jwt, verificarActivo], updateProfesional);
route.delete("/:id", [validar_jwt, verificarActivo], deleteProfesional);

module.exports = route;
