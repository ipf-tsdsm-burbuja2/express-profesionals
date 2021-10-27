const { model, Schema } = require("mongoose");

const Professional = new Schema({
  personal_info: {
    //--------Nombre completo en un solo string-----------
    fullname: {
      type: String,
      require: true,
    },
    //---------Fecha de nacimiento--------------
    birthdate: {
      type: Date,
      require: true,
    },
    //-----Documento, string debido a que no se hacen operaciones con el dato
    dni: {
      type: String,
      require: true,
      unique: true,
    },
    //--------Género--------
    // -------Select con opciones--------
    gender: {
      type: String,
      require: true,
    },
    //--------País-----------
    //-----Select con consumo de api de países--------
    country: {
      type: String,
      require: true,
    },
    //--------Ciudad----------
    //-----Select con consumo de api de ciudades--------
    state: {
      type: String,
      require: true,
    },
    //-------Dirección---------
    address: {
      type: String,
      require: true,
    },
    //----------Descripción de pasatiempos--------
    hobbies: {
      type: String,
      require: false,
    },
  },

  contact_info: {
    //--------Número de cel único-----------
    phone: {
      type: String,
      require: true,
    },
    //--------Correo o email único------------
    email: {
      type: String,
      require: true,
      unique: true,
    },
    //----------Links de redes sociales----------
    social_media: {
      type: Array,
      require: false,
    },
  },

  academic_info: {
    //----------Escuela, colegio, terciario, universidad--------
    primary: {
      type: String,
      require: true,
    },
    secondary: {
      type: String,
      require: true,
    },
    tertiary: {
      type: String,
      // require: true,
    },
    university: {
      type: String,
      // require: true,
    },
    //---------Cursos y certificaciones extra------------
    certifications: {
      type: Array,
      require: false,
    },
  },

  professional_info: {
    //--------Descripciones de strings en text-area---------
    //--------Conocimientos técnicos, como lenguajes, bases de datos, etc.
    summary: {
      type: String,
      require: true,
    },
    //-----Descripción de lugar y puesto de trabajo--------
    work_exp: {
      type: String,
      require: true,
    },
    //-------Habilidades como trabajo en equipo, liderazgo, etc.
    skills: {
      type: String,
      require: true,
    },
    //------Idiomas que habla el profesional----------
    //-----Select con consumo de api de idiomas--------
    languages: {
      type: Array,
      require: true,
    },
  },
});

module.exports = model("Professional", Professional);
