import { Alert, Modal, Spinner } from "reactstrap";
import { IoClose } from "react-icons/io5";
import { 
  Close,
  Container,
  Form,
  Image,
  Item,
  Navigation,
  Section,
  SessionSection } from "./styles";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { Formik } from "formik";
import validate from "./validate";
import Login from "./login";
import Register from "./register";
import Button from "../Button";
import { useData } from "../../context/data";

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
};

function SessionModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [personInfo, setPersonInfo] = useState(personInfoObject);
  const { setError, error, login, signup } = useAuth();
  const { setModal, modal } = useData();

  const toggle = (resetForm) => {
    setModal({ ...modal, isOpen: !modal.isOpen });
    setError(null);
    setIsLoading(false);
    setPersonInfo(personInfoObject);
    resetForm();
  }

  const changeAction = (to, resetForm) => {
    if(isLoading) return;

    setModal(modal => ({...modal, action: to}));
    setError(null);
    resetForm();
  }

  const handleSubmit = async (values, resetForm) => {
    setIsLoading(true);
    let data = values;

    if(modal.action === "register") {
      data = {
        ...values,
        dni: personInfo.dni,
        name: personInfo.name,
        last_name: personInfo.last_name
      }
    }

    try {
      if(modal.action === "login") {
        const user = await login(data);
        if(user) toggle(resetForm);
        setIsLoading(false);
        return;
      }

      const newUser = await signup(data);
      if(newUser) toggle(resetForm);
      setIsLoading(false);
    }catch(e) {
      setError(e.message);
      setIsLoading(false);
    }   
  }

  const initialValues = modal.action === "login"
    ? {
        email: "",
        password: ""
      }
    : {
        email: "",
        dni: "",
        name: "",
        last_name: "",
        phone: "",
        address: "",
        password: "",
        password_confirmation: ""
      }
    
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={(values) => validate(values, modal.action)}
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
        <>
          <Modal
            isOpen={modal.isOpen}
            toggle={() => toggle(resetForm)}
            centered
            size="lg"
            style={{borderRadius: "5rem"}}
          >
            <Container>
              <Close>
                <IoClose
                  onClick={() => toggle(resetForm)}
                  size={25}
                />
              </Close>
              <Section
                isImage
              >
                <Image 
                  alt="box"
                  src="/assets/photo/box.jpeg"
                />
              </Section>
              <Section>
                <SessionSection>
                  <Navigation>
                    <Item
                      onClick={() => changeAction("register", resetForm)}
                      active={modal.action === "register"}
                    >
                      Registro
                    </Item>
                    <Item
                      onClick={() => changeAction("login", resetForm)}
                      active={modal.action === "login"}
                    >
                      Acceder
                    </Item>
                  </Navigation>
                  <Form
                    action={modal.action}
                    onSubmit={(values) => handleSubmit(values, resetForm)}
                  >
                    {
                      modal.action === "login"
                      ? <Login 
                          errors={errors}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched}
                          values={values}
                        />
                      : <Register 
                          errors={errors}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched}
                          values={values}
                          personInfo={personInfo}
                          setPersonInfo={setPersonInfo}
                        />
                    }
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
                      color="secondary"
                      size="full"
                      disabled={
                        !isValid
                        || isLoading
                        || (modal.action === "register" && !personInfo.dni) 
                        || (modal.action === "register" && personInfo.dni.length < 8)
                      }
                      type="submit"
                    >
                      {
                        isLoading
                        ? <>
                            <Spinner size="sm" />
                            {" "}
                            {
                              modal.action === "login"
                              ? "Iniciando sesión..."
                              : "Registrando..."
                            }
                          </>
                        : modal.action === "login" ? "Iniciar sesión" : "Registrarme"
                      }
                    </Button>
                  </Form>
                </SessionSection>
              </Section>
            </Container>
          </Modal>
        </>
      )}
    </Formik>
  );
}

export default SessionModal;
