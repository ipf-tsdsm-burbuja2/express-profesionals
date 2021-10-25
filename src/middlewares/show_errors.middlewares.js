const { validationResult } = require("express-validator");

// devolver al usuario los erroreres tirados por express-validator
const showErrors = (req, res, next) => {
  const errors = validationResult(req);
  const listerrors = errors.array().map((error) => error.msg);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: listerrors });
  }
  next();
};

module.exports = { showErrors };