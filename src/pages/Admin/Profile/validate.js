function validate(values) {
  const errors = {};

  // email
  if(!values.email) {
    errors.email = "Este campo es obligatorio";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
    errors.email = "El formato es incorrecto";
  }

  // dni
  if(!values.dni) {
    errors.dni = "Este campo es obligatorio";
  }else if((values.dni * 1).toString() === "NaN") {
    errors.dni = "Solo se aceptan números";
  }

  // name
  if(!values.name) errors.name = "Este campo es obligatorio";

  // last name
  if(!values.last_name) errors.last_name = "Este campo es obligatorio";

  // phone
  if(!values.phone) {
    errors.phone = "Este campo es obligatorio";
  }else if((values.phone * 1).toString() === "NaN") {
    errors.phone = "Solo se aceptan números";
  }

  // password
  if(values.password) {
    if(values.password.length < 6) {
      errors.password = "El mínimo son 6 caracteres";
    }

    if(values.password !== values.confirm_password) {
      errors.confirm_password = "Las contraseñas deben coincidir";
    }
  }

  return errors;
}

export default validate;
