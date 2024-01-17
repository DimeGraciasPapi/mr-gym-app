import { useState } from "react";
import { Alert, Modal, Spinner } from "reactstrap";
import Button from "../../../components/Button";
import Search from "../../../components/Search";
import { useData } from "../../../context/data";
import { Title } from "../../../styles/layout";
import { FlexColumn, FlexRow, Form, FormTitle, Section } from "./styles";
import { IoMdPersonAdd } from "react-icons/io";
import Card from "../../../components/Card";
import { Formik } from "formik";
import validate from "./validate";
import FormInput from "../../../components/FormInput";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { HiMiniIdentification } from "react-icons/hi2";
import { getInfo } from "../../../services/reniec";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglestreetview } from "react-icons/si";
import { BiSolidKey } from "react-icons/bi";
import { signup } from "../../../services/sessions";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";

const personInfoObject = {
  dni: "",
  name: "",
  last_name: "",
  error: {
    dni: ""
  },
  blur: {
    dni: false
  }
}

function Members() {
  const [modal, setModal] = useState(false);
  const [personInfo, setPersonInfo] = useState(personInfoObject);
  const [isLoading, setIsLoading] = useState(false);
  const { isGetting, members, error, setError, setMembers, setBackup } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggle = () => {
    if(isLoading || isGetting) return;
    setPersonInfo(personInfoObject);
    setModal(!modal);
  }

  const initialValues = {
    email: "",
    name: "",
    last_name: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: ""
  }

  const handleSubmit = async (values) => {
    setIsLoading(true);
    
    try {
      const data = {
        ...values,
        dni: personInfo.dni,
        name: personInfo.name,
        last_name: personInfo.last_name
      }

      const newUser = await signup(data, user);
      if(newUser) {
        const newMembers = members.concat([newUser]);
        setMembers(newMembers);
        setBackup((backup) => ({ ...backup, members: newMembers }));
        navigate(`/miembros/${newUser.id}`);
        toggle();
      }
      setIsLoading(false);
    }catch(e) {
      console.error(e);
      setError(e.message);
      setIsLoading(false);
    }
  }

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
      }));
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
        [e.target.name]: "Este campo es obligatorio"
      }
    }));
  }

  return (
    <>
      <Title>Gestión de miembros</Title>
      <FlexRow>
        <Search />
        <Button
          filled
          color="secondary"
          Icon={IoMdPersonAdd}
          onClick={toggle}
        >
          Nuevo miembro
        </Button>
      </FlexRow>
      <Section isLoading={isGetting}>
        {
          isGetting
          ? <Spinner />
          : members.map((member, index) => (
              <Card
                key={index}
                member={member}
              />
            ))
        }
      </Section>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={(values) => validate(values, personInfo)}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm
          }) => (
            <FlexColumn>
              <FormTitle>Nuevo miembro</FormTitle>
              <IoClose 
                size={24}
                className="icon"
                onClick={toggle}
              />
              <Form
                onSubmit={handleSubmit}
              >
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
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.password}
                  touched={touched.password}
                />
                 <FormInput 
                  Icon={BiSolidKey}
                  type="password"
                  id="password_confirmation"
                  placeholder="Confirmar contraseña"
                  value={values.password_confirmation}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.password_confirmation}
                  touched={touched.password_confirmation}
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
                  filled
                  size="full"
                  disabled={isLoading || !isValid}
                  Icon={IoMdPersonAdd}
                  type="submit"
                >
                  {
                    isLoading
                    ? <>
                        <Spinner size="sm" />
                        {" "}
                        Creando...
                      </>
                    : "Crear miembro"
                  }
                </Button>
              </Form>
            </FlexColumn>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default Members;
