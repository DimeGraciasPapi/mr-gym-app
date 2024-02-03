import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../../context/data";
import { Alert, Button as Btn, Modal, ModalBody, ModalHeader, Spinner } from "reactstrap";
import { Title } from "../../../styles/layout";
import capitalize from "../../../helpers/capitalize";
import { CardTitle, Container, Control, FlexRow, Form, Image, Section, Text, View } from "./styles";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { COLORS } from "../../../styles/colors";
import { Formik } from "formik";
import validate from "./validate";
import FormInput from "../../../components/FormInput";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglestreetview } from "react-icons/si";
import Select from "../../../components/FormInput/select";
import Button from "../../../components/Button";
import { RxUpdate } from "react-icons/rx";
import { destroy, update } from "../../../services";
import { HiMiniBackspace } from "react-icons/hi2";

function Member() {
  const [ isActive, setIsActive ] = useState(false);
  const [ editModal, setEditModal ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ deleteModal, setDeleteModal ] = useState(false);
  const { id } = useParams();
  const { members, isGetting, setIsGetting, plans, error, setError, updateMember, deleteMember } = useData();
  const member = members?.find((member) => member.id === id);
  const plan = plans?.find((plan) => plan.id === member?.plan[0]);
  const options = plans.map((plan) => plan.name);
  const navigate = useNavigate();

  const editToggle = () => setEditModal(!editModal);
  const deleteToggle = () => setDeleteModal(!deleteModal);

  const initialValues = {
    phone: member?.phone,
    address: member?.address,
    plan: plan?.name
  }

  const handleSubmit = async (values) => {
    setIsLoading(true);

    try {
      if(values.plan) {
        const newPlan = plans.find((plan) => plan.name === values.plan);
        values.planId = newPlan.id;
      }

      const updatedMember = await update("users", values, member.id);
      await updateMember(member, updatedMember);
      editToggle();

      setIsLoading(false);
      setError(null);
    }catch(e) {
      setError(e.message);

      setIsLoading(false);
    }
  }

  const handleDelete = async () => {
    setIsGetting(true);

    try {
      navigate("/miembros");
      
      await destroy("users", member.id);
      await deleteMember(member.id);
      setIsGetting(false);
      setError(null);
    }catch(e) {
      console.error(e);

      window.history.back();
      setIsGetting(false);
    }
  }

  return (
    isGetting
    ? <Spinner />
    : <>
        <Title>{`${capitalize(member?.name.toLowerCase())} ${capitalize(member?.last_name.toLowerCase())}`}</Title>
        <Section>
          <Container>
            <FlexRow>
              <CardTitle>DNI: </CardTitle>
              <Text>{member?.dni}</Text>
            </FlexRow>
            <FlexRow>
              <CardTitle>Correo: </CardTitle>
              <Text>{member?.email}</Text>
            </FlexRow>
            <FlexRow>
              <CardTitle>Teléfono: </CardTitle>
              <Text>{member?.phone}</Text>
            </FlexRow>
            <FlexRow>
              <CardTitle>Dirección: </CardTitle>
              <Text>{member?.address || "No registrado"}</Text>
            </FlexRow>
            <FlexRow>
              <CardTitle>Plan: </CardTitle>
              <Text>{plan?.name || "No contratado"}</Text>
            </FlexRow>
            <FlexRow>
              <CardTitle>Pagado: </CardTitle>
              <Text>S/. {plan?.price || 0}</Text>
            </FlexRow>
            <FlexRow>
              <CardTitle>Días restantes: </CardTitle>
              <Text>{member?.days_remaining}</Text>
            </FlexRow>
          </Container>
          <Control
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            <View
              isActive={isActive}
            >
              <Image 
                src="https://static.vecteezy.com/system/resources/previews/016/314/917/original/transparent-danger-sign-free-png.png"
                alt="skull-danger"
              />
            </View>
            <Btn
              color="warning"
              onClick={editToggle}
            >
              <FlexRow gap={0.3}>
                <FaRegEdit
                  style={{transform: "translateY(-1px)"}}
                  size={18}
                />
                Editar miembro
              </FlexRow>
            </Btn>
            <Btn
              color="danger"
              onClick={deleteToggle}
            >
              <FlexRow gap={0.3}>
                <FaRegTrashAlt 
                  style={{transform: "translateY(-1px)"}}
                  size={18}
                />
                Eliminar miembro
              </FlexRow>
            </Btn>
          </Control>
        </Section>
        {/* update member */}
        <Modal 
          isOpen={editModal}
          toggle={editToggle}
          centered
        >
          <ModalHeader 
            toggle={editToggle}
          >
            <Text
              toDown
              size={18}
              color={COLORS.black}
            >
              Editar miembro
            </Text>
          </ModalHeader>
          <ModalBody>
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
                  <Select 
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    id="plan"
                    label="Plan"
                    touched={touched.plan}
                    value={values.plan}
                    options={options}
                  />
                  {
                    error
                    &&  <Alert
                          color="danger"
                          style={{width: "100%"}}
                        >
                          { error.replaceAll('"', "") }
                        </Alert>
                  }
                  <Button
                    filled
                    size="full"
                    type="submit"
                    Icon={RxUpdate}
                    disabled={!isValid || isLoading}
                  >
                    {
                      isLoading
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
          </ModalBody>
        </Modal>
        {/* delete member */}
        <Modal
          isOpen={deleteModal}
          toggle={deleteToggle}
          centered
          size="sm"
        >
          <ModalHeader toggle={deleteToggle}>
            <Text
              toDown
              size={18}
              color={COLORS.black}
            >
              ¿Esta seguro de eliminar?
            </Text>
          </ModalHeader>
          <ModalBody>
            <FlexRow>
              <Button
                Icon={HiMiniBackspace}
                onClick={deleteToggle}
                filled
              >
                Cancelar
              </Button>
              <Btn
                color="danger"
                onClick={handleDelete}
              >
                <FlexRow gap={0.3}>
                  <FaRegTrashAlt 
                    style={{transform: "translateY(-1px)"}}
                    size={18}
                  />
                  Eliminar
                </FlexRow>
              </Btn>
            </FlexRow>
          </ModalBody>
        </Modal>
      </>
  )
}

export default Member;
