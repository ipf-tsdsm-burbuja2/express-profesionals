const { loginUser } = require("../controllers/login.controllers");
const { createUser } = require("../controllers/user.controllers");
const {
  form_post_middlewares,
} = require("../middlewares/form_structure.middlewares");

const route = require("express").Router();

route.post("/register", form_post_middlewares, createUser);
route.post("/login", loginUser);
module.exports = route;
