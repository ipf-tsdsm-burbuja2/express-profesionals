const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
require("./dbconection");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// Setttings
app.set("port", process.env.PORT || 4000);

// Routes
app.use("/api/profesionales", require("./src/routes/professionals.routes"));
// rutas para registrar un usuario y autenticarlo
app.use("/api", require("./src/routes/apiAuthentication.routes"));
// app.use("/user", require("./src/routes/user.routes"));
// app.use("/api", require("./src/routes/api.routes"));
// app.use("/rol", require("./src/routes/rol.routes"));

app.listen(app.get("port"), () =>
  console.log(`Example app listening on port ${app.get("port")}!`)
);
