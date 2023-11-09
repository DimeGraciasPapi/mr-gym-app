import FormInput from "../FormInput";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiMiniIdentification } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { getInfo } from "../../services/reniec";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglestreetview } from "react-icons/si";
import { BiSolidKey } from "react-icons/bi";

function Register({
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    personInfo,
    setPersonInfo
  }) {

  const handleChangeInfo = async (e) => {
    if(e.target.value.length > 8) return;
    
    setPersonInfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
      error: {
        ...info.error,
        [e.target.name]: e.target.value.trim().length > 0 ? null : info.error[e.target.name]
      }
    }));

    if(e.target.value.length === 8) {
      const info = await getInfo(e.target.value);

      setPersonInfo((data) => ({
        ...data,
        name: info.data?.nombres || "",
        last_name: info.success ? `${info.data.apellido_paterno} ${info.data.apellido_materno}` : ""
      }))
    }
  }

  const handleBlurInfo = (e) => {
    setPersonInfo((info) => ({
      ...info,
      blur: {
        ...info.blur,
        [e.target.name]: true
      }
    }));

    if(!e.target.value) setPersonInfo((info) => ({
      ...info,
      error: {
        ...info.error,
        [e.target.name]: "Este campo es obligatiorio"
      }
    }));
  }

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
        Icon={HiMiniIdentification}
        id="dni"
        placeholder="DNI"
        value={personInfo.dni}
        handleChange={handleChangeInfo}
        handleBlur={handleBlurInfo}
        error={personInfo.error.dni}
        touched={personInfo.blur.dni}
      />
      <FormInput 
        Icon={BsFillPersonFill}
        id="name"
        placeholder="Nombres"
        value={personInfo.name || values.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        disabled={!!personInfo.name}
        error={errors.name}
        touched={touched.name}
      />
      <FormInput 
        Icon={BsFillPersonFill}
        id="last_name"
        placeholder="Apellidos"
        value={personInfo.last_name || values.last_name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        disabled={!!personInfo.last_name}
        error={errors.last_name}
        touched={touched.last_name}
      />
      <FormInput 
        Icon={AiFillPhone}
        id="phone"
        placeholder="Teléfono"
        value={values.phone}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.phone}
        touched={touched.phone}
      />
      <FormInput 
        Icon={SiGooglestreetview}
        id="address"
        placeholder="Dirección (*opcional)"
        value={values.address}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.address}
        touched={touched.address}
      />
      <FormInput 
        Icon={BiSolidKey}
        id="password"
        placeholder="Contraseña"
        value={values.password}
        handleChange={handleChange}
        type="password"
        handleBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
      />
      <FormInput 
        Icon={BiSolidKey}
        id="password_confirmation"
        placeholder="Confirma contraseña"
        value={values.password_confirmation}
        handleChange={handleChange}
        type="password"
        handleBlur={handleBlur}
        error={errors.password_confirmation}
        touched={touched.password_confirmation}
      />
    </>
  ); 
}

export default Register;
