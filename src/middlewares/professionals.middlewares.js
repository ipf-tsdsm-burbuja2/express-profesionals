const middlewares = {};

middlewares.professionalExtractAtributes = (req, res, next) => {
  let { personal_info, contact_info, academic_info, professional_info } =
    req.body;

  const { fullname, birthdate, dni, gender, country, state, address, hobbies } =
    personal_info;

  const { phone, email, social_media } = contact_info;

  const { primary, secondary, tertiary, universitary, certifications } =
    academic_info;

  const { summary, work_exp, skills, languages } = professional_info;

  const extracted_personal_info = {
    fullname,
    birthdate,
    dni,
    gender,
    country,
    state,
    address,
    hobbies,
  };

  const extracted_contact_info = {
    phone,
    email,
    social_media,
  };

  const extracted_academic_info = {
    primary,
    secondary,
    tertiary,
    universitary,
    certifications,
  };

  const extracted_professional_info = {
    summary,
    work_exp,
    skills,
    languages,
  };

  personal_info = extracted_personal_info;
  contact_info = extracted_contact_info;
  academic_info = extracted_academic_info;
  professional_info = extracted_professional_info;

  next();
};

module.exports = middlewares;
