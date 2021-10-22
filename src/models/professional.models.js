const { model, Schema } = require("mongoose");

const ProfessionalSchema = new Schema({
  personalInfo: {
    fullname: {
      type: String,
      require: true,
    },
    birthdate: {
      type: Date,
      require: true,
    },
    dni: {
      type: String,
      require: true,
      unique: true,
    },
    gender: {
      type: Boolean,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    hobbies: {
      type: Array,
      require: false,
    },
  },
  contactInfo: {
    phone: {
      type: Array,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    socialMedia: {
      type: Array,
      require: false,
    },
  },
  academicInfo: {
    education: {
      type: Array,
      require: true,
    },
    licences: {
      type: Array,
      require: false,
    },
    certifications: {
      type: Array,
      require: false,
    },
  },
  professionalInfo: {
    summary: {
      type: String,
      require: true,
    },
    workExp: {
      type: Array,
      require: true,
    },
    skills: {
      type: Array,
      require: true,
    },
    languages: {
      type: Array,
      require: true,
    },
  },
  active: { type: Boolean, default: true },
});

module.exports = model("Professional", ProfessionalSchema);
