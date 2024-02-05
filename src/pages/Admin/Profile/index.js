import { useState } from "react";
import { Alert, Spinner } from "reactstrap";
import { Title } from "../../../styles/layout";
import { Form, FormTitle } from "./styles";
import { useAuth } from "../../../context/auth";
import { Formik } from "formik";
import validate from "./validate";
import FormInput from "../../../components/FormInput";
import { MdAlternateEmail } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import Button from "../../../components/Button";
import { update } from "../../../services";
import { FaPhoneSquareAlt, FaMapMarkedAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Profile() {
  const [ isUpdating, setIsUpdating ] = useState(false);
  const { user, error, setError, setUser } = useAuth();

  const initialValues = {
    email: user?.email,
    dni: user?.dni,
    name: user?.name,
    last_name: user?.last_name,
    phone: user?.phone,
    address: user?.address,
    password: "",
    confirm_password: ""
  }

  const handleSubmit = async (values) => {
    setIsUpdating(true);

    try {
      const body = {
        email: values.email,
        dni: values.dni,
        name: values.name,
        last_name: values.last_name,
        phone: values.phone,
        address: values.address,
      }

      if(values.password) body.password = values.password;

      const updatedUser = await update("users", body, user.id);
      setUser(updatedUser);
      setError(null);
      setIsUpdating(false);
    }catch(e) {
      console.error(e);
      setError(e.message);

      setIsUpdating(false);
    }
  }

  return (
    <>
      <Title>Editar perfil</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleSubmit,
          handleBlur,
          handleChange
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormTitle>Perfil</FormTitle>
            <FormInput 
              Icon={MdAlternateEmail}
              error={errors.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="email"
              placeholder="Correo electónico"
              touched={touched.email}
              value={values.email}
            />
            <FormInput 
              Icon={HiIdentification}
              error={errors.dni}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="dni"
              placeholder="DNI"
              touched={touched.dni}
              value={values.dni}
            />
            <FormInput 
              Icon={HiIdentification}
              error={errors.name}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="name"
              placeholder="Nombres"
              touched={touched.name}
              value={values.name}
            />
            <FormInput 
              Icon={HiIdentification}
              error={errors.last_name}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="last_name"
              placeholder="Apellidos"
              touched={touched.last_name}
              value={values.last_name}
            />
            <FormInput 
              Icon={FaPhoneSquareAlt}
              error={errors.phone}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="phone"
              placeholder="Teléfono"
              touched={touched.phone}
              value={values.phone}
            />
            <FormInput 
              Icon={FaMapMarkedAlt}
              error={errors.address}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="address"
              placeholder="Dirección"
              touched={touched.address}
              value={values.address}
            />
            <FormInput 
              Icon={RiLockPasswordFill}
              error={errors.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="password"
              type="password"
              placeholder="Nueva contraseña"
              touched={touched.password}
              value={values.password}
            />
            <FormInput 
              Icon={RiLockPasswordFill}
              error={errors.confirm_password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="confirm_password"
              type="password"
              placeholder="Confirma la contraseña"
              touched={touched.confirm_password}
              value={values.confirm_password}
            />
            {
              error
              ? <Alert
                  color="danger"
                  style={{width: "100%"}}
                >
                  { error.replaceAll('"', "") }
                </Alert>
              : null
            }
            <Button
              style={{margin: "0.5rem 0 0.5rem 0"}}
              filled
              disabled={!isValid || isUpdating}
            >
              {
                isUpdating
                ? <>
                    <Spinner size="sm" />
                    {" "}
                    Actualizando...
                  </>
                : "Actualizar"
              }
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Profile;
