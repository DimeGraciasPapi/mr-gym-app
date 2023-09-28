import FormInput from "../FormInput";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiSolidKey } from "react-icons/bi";

function Login({ 
  values,
  handleChange,
  handleBlur,
  errors,
  touched }) {
  return (
    <>
      <FormInput 
        Icon={MdOutlineAlternateEmail}
        id="email"
        placeholder="Correo electrónico"
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />
      <FormInput 
        Icon={BiSolidKey}
        id="password"
        type="password"
        placeholder="Contraseña"
        value={values.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
      />
    </>
  );
}

export default Login;
