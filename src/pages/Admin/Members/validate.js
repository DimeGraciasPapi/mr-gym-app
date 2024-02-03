function validate(values, personInfo) {
  const errors = {};

  // email
  if(!values.email) {
    errors.email = "Este campo es obligatorio";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
    errors.email = "El formato es incorrecto";
  }

  // password
  if(!values.password) {
    errors.password = "Este campo es obligatorio";
  }else if(values.password.length < 6) {
    errors.password = "El mínimo son 6 caracteres";
  }

  // name - last name
  if(!personInfo.name) {
    if(!values.name) {
      errors.name = "Este campo es obligatorio";
    }
  
    if(!values.last_name) {
      errors.last_name = "Este campo es obligatorio";
    }
  }

  // password confirmation
  if(!values.password_confirmation) {
    errors.password_confirmation = "Este campo es obligatorio";
  }else if(values.password !== values.password_confirmation) {
    errors.password_confirmation = "Las contraseñas no coinciden";
  }

  // phone
  if(!values.phone) {
    errors.phone = "Este campo es obligatorio";
  }else if((values.phone * 1).toString() === "NaN") {
    errors.phone = "Solo se aceptan números";
  }

  return errors;
}

export default validate;
