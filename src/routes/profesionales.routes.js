const route = require("express").Router();

//-----------Middlewares-------------------

//----------Controladores-----------------
const {
  getProfesionales,
  getProfesional,
  createProfesional,
  updateProfesional,
  deleteProfesional,
} = require("../controllers/profesionales.controllers");

//---------------Rutas---------------------
// publicas
route.get("/", getProfesionales);
route.get("/:id", getProfesional);

// privadas
route.post("/", createProfesional);
route.put("/:id", updateProfesional);
route.put("/password/:id", updateProfesional);
route.delete("/:id", deleteProfesional);

module.exports = route;
