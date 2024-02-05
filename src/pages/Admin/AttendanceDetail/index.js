import { useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../context/data";
import { Title } from "../../../styles/layout";
import { Alert, Modal, Spinner } from "reactstrap";
import capitalize from "../../../helpers/capitalize";
import { CardTitle, Container, FlexRow, Text } from "../Member/styles";
import { Divider, Form, FormTitle, Section } from "./styles";
import Button from "../../../components/Button";
import { IoBagAddSharp } from "react-icons/io5";
import { Formik } from "formik";
import FormInput from "../../../components/FormInput";
import { FaShoppingBasket } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { update } from "../../../services";
import { LuCheck } from "react-icons/lu";

function AttendanceDetail() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ confirmModal, setConfirmModal ] = useState(false);
  const { registers, members, isGetting, error, setError, updateRegister } = useData();
  const { id } = useParams();

  let attendance = registers.find((register) => register.id === id);
  attendance = {...attendance, user: members.find((member) => member.id === attendance?.user[0])};
  const date = new Date(attendance.createdAt);

  const initialValues = {
    takes: attendance.takes?.join(", ") || ""
  }

  const handleSubmit = async (values) => {
    setIsLoading(true);

    try {
      const oldRegister = registers.find((register) => register.id === attendance.id);
      const newRegister = await update("registers", { takes: values.takes.split(", ") }, attendance.id);
      await updateRegister(oldRegister, newRegister);

      toggle();
      setError(null);
      setIsLoading(false);
    }catch(e) {
      setIsLoading(false);
      setError(e.message);

      console.error(e)
    }
  }

  const handleConfirm = async () => {
    setIsLoading(true);

    try {
      const oldRegister = registers.find((register) => register.id === attendance.id);
      const newRegister = await update("registers", { takes: [] }, attendance.id);
      await updateRegister(oldRegister, newRegister);

      setIsLoading(false);
      confirmToggle();
      setError(null);
    }catch(e) {
      setIsLoading(false);

      console.error(e);
    }
  }

  const toggle = () => setModal(!modal);
  const confirmToggle = () => setConfirmModal(!confirmModal);

  const validate = (values) => {
    const errors = {};

    // takes
    if(!values.takes) errors.takes = "Este campo es obligatorio";

    return errors;
  }

  return (
    isGetting
    ? <Spinner />
    : <>
        <Title>{ capitalize(attendance?.user?.name.toLowerCase() + " " + attendance?.user?.last_name.toLowerCase()) }</Title>
        <Container
          width="50%"
          margin="0 auto"
        >
          <FlexRow>
            <CardTitle>DNI: </CardTitle>
            <Text>{ attendance?.user?.dni }</Text>
          </FlexRow>
          <FlexRow>
            <CardTitle>Fecha: </CardTitle>
            <Text>{ capitalize(date.toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" })) + ` (${date.toLocaleTimeString()})` }</Text>
          </FlexRow>
          <FlexRow>
            <CardTitle>Prestado: </CardTitle>
            <Text>{ attendance.takes.length <= 0 ? "Nada prestado" : capitalize(attendance.takes.join(", ")) }</Text>
          </FlexRow>
          <Section>
            {
              attendance.takes.length !== 0
              &&  <Button
                    filled
                    color="secondary"
                    onClick={confirmToggle}
                  >
                    ¿Las devolvió?
                  </Button>
            }
            <Button
              filled
              Icon={IoBagAddSharp}
              onClick={toggle}
            >
              Objetos prestados
            </Button>
          </Section>
        </Container>
        <Modal
          toggle={toggle}
          isOpen={modal}
          centered
          size="md"
        >
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
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <Form
                onSubmit={handleSubmit}
              >
                <FormTitle>
                  Objetos prestados
                </FormTitle>
                <CgClose 
                  className="icon"
                  size={22}
                  onClick={toggle}
                />
                <FormInput 
                  Icon={FaShoppingBasket}
                  error={errors.takes}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  id="takes"
                  placeholder="Separados por comas (Mancuerna, Faja, ...)"
                  touched={touched.takes}
                  value={values.takes}
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
                  type="Submit"
                  filled
                  Icon={IoBagAddSharp}
                  disabled={!isValid || isLoading}
                >
                  {
                    isLoading
                    ? <>
                        <Spinner size="sm" />
                        {" "}
                        Guardando...
                      </>
                    : "Guardar"
                  }
                </Button>
              </Form>
            )}
          </Formik>
        </Modal>
        <Modal
          toggle={confirmToggle}
          isOpen={confirmModal}
          centered
        >
          <Divider>
            <CgClose 
              className="icon"
              size={22}
              onClick={confirmToggle}
            />
            <FormTitle>
              ¿Desea confirmar?
            </FormTitle>
            <Section>
              <Button
                filled
                color="secondary"
                Icon={CgClose}
                onClick={confirmToggle}
              >
                Cancelar
              </Button>
              <Button
                filled
                Icon={LuCheck}
                onClick={handleConfirm}
              >
                {
                  isLoading
                  ? <>
                      <Spinner size="sm" />
                      {" "}
                      Confirmando...
                    </>
                  : "Confirmar"
                }
              </Button>
            </Section>
          </Divider>
        </Modal>
      </>
  );
}

export default AttendanceDetail;
