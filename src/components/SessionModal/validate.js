function validate(values, action) {
  const errors = {};

  if(!values.email) {
    errors.email = "Este campo es obligatorio";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
    errors.email = "El formato es incorrecto";
  }

  if(!values.password) {
    errors.password = "Este campo es obligatorio";
  }else if(values.password.length < 6) {
    errors.password = "El mínimo son 6 caracteres";
  }

  // only for register
  if(action === "register") {
    if(!values.password_confirmation) {
      errors.password_confirmation = "Este campo es obligatorio";
    }else if(values.password !== values.password_confirmation) {
      errors.password_confirmation = "Las contraseñas no coinciden";
    }

    if(!values.phone) {
      errors.phone = "Este campo es obligatorio";
    }else if((values.phone * 1).toString() === "NaN") {
      errors.phone = "Solo se aceptan números";
    }
  }

  return errors;
}

export default validate;
