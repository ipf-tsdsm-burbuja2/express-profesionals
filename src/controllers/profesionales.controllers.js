const Profesionales = require("../models/professional.models");
const bcryptjs = require("bcryptjs");
const controller = {};

controller.getProfesionales = async (_req, res) => {
  const profesionales = await Profesionales.find({ active: true });

  res.json(profesionales);
};

controller.getProfesional = async (req, res) => {
  const { id } = req.params;

  try {
    const profesionales = await Profesionales.findOne({ _id: id });
    res.json(profesionales);
  } catch (error) {
    res.json({
      msg: "Error al obtener profesional",
    });
  }
};

controller.createProfesional = async (req, res) => {
  //   let { personalInfo: { fullname, birthdate, dni, gender, country, state, address, hobbies },
  // contactInfo: { phone, email, socialMedia },
  // academicInfo: { education, certifications },
  // professionalInfo: { summary, workExp, skills, languages } } = req.body;

  let { personalInfo, contactInfo, academicInfo, professionalInfo } = req.body;
  let { fullname, birthdate, dni, gender, country, state, address, hobbies } =
    personalInfo;
  let { phone, email, socialMedia } = contactInfo;
  let { education, certifications } = academicInfo;
  let { summary, workExp, skills, languages } = professionalInfo;

  // const salt = bcryptjs.genSaltSync();
  // password = bcryptjs.hashSync(password, salt);

  const profesionales = new Profesionales({
    personalInfo,
    contactInfo,
    academicInfo,
    professionalInfo,
  });
  await profesionales.save();

  res.json({
    msg: "profesional agregado",
  });
};

controller.updateProfesional = async (req, res) => {
  const { id } = req.params;
  const { email, fullname, active } = req.body;
  const update = {};

  if (Profesionalesname) {
    update.fullname = fullname;
  }

  if (email) {
    update.email = email;
  }

  if (active) {
    update.active = active;
  }

  if (update.fullname || update.email || update.active) {
    try {
      const profesionales = await Profesionales.findByIdAndUpdate(id, update, {
        new: true,
      });
      return res.json({ msg: "Datos de profesional actualizados" });
    } catch (error) {
      return res.status(401).json({ msg: "Error al actualizar profesional" });
    }
  } else {
    res.status(401).json({
      msg: "no se enviaron datos",
    });
  }
};

controller.deleteProfesional = async (req, res) => {
  const { id } = req.params;

  try {
    const profesionales = await Profesionales.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );

    res.json({
      msg: "el profesional se elimino del sistema",
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar profesional" });
  }
};

module.exports = controller;
