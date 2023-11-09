function validate(values) {
  const errors = {};

  if(!values.phone) {
    errors.phone = "Este campo es obligatorio";
  }else if((values.phone * 1).toString() === "NaN") {
    errors.phone = "Solo se aceptan números";
  }

  if(values.password) {
    if(values.password.length < 6) {
      errors.password = "El mínimo son 6 caracteres";
    }

    if(!values.password_confirmation) {
      errors.password_confirmation = "Este campo es obligatorio";
    }else if(values.password !== values.password_confirmation) {
      errors.password_confirmation = "Las contraseñas no coinciden";
    }
  }

  return errors;
}

export default validate;
