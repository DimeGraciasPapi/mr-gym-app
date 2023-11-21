import { Formik } from "formik";
import { Container, FlexColumn, FlexRow, Form, Plan, Section, Text, Title, TitleSection } from "./styles";
import { useAuth } from "../../../context/auth";
import { useState } from "react";
import FormInput from "../../../components/FormInput";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiMiniIdentification } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglestreetview } from "react-icons/si";
import { BiSolidKey } from "react-icons/bi";
import Button from "../../../components/Button";
import validate from "./validate";
import { Alert, Spinner } from "reactstrap";
import { update } from "../../../services";
import { GiBiceps } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context/data";
import { COLORS } from "../../../styles";
import getLinkToPay from "../../../helpers/preference";

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [planLoading, setPlanLoading] = useState(false);
  const { user, setError, error, setUser } = useAuth();
  const { plans, setChosenPlan } = useData();
  const navigate = useNavigate();

  const handleClick = async () => {
    setPlanLoading(true);
    const link = await getLinkToPay(plans[0], user);
    setChosenPlan({ ...plans[0], link });
    setPlanLoading(false);
    navigate("/choose-plan");
  }

  const handleSubmit = async (values) => {
    setIsLoading(true);

    if(!values.password) {
      delete values.password;
    }

    try {
      const updatedUser = await update("users", values, user.id);
      setUser({ token: user.token, ...updatedUser });
      setIsLoading(false);
      setError(null);
    }catch(e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  const initialValues = {
    name: user.name,
    last_name: user.last_name,
    dni: user.dni,
    email: user.email,
    phone: user.phone,
    address: user.address || "",
    password: "",
    password_confirmation: ""
  }

  const plan = plans.find(plan => plan.id === user.plan[0]);

  return (
    <Container>
      <Section>
        <Title>Perfil</Title>
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
            handleSubmit,
          }) => (
            <Form
              onSubmit={handleSubmit}
            >
              <FormInput
                Icon={MdOutlineAlternateEmail}
                id="email"
                value={values.email}
                disabled
              />
              <FormInput 
                Icon={HiMiniIdentification}
                id="dni"
                placeholder="DNI"
                value={values.dni}
                disabled
              />
              <FormInput 
                Icon={BsFillPersonFill}
                id="name"
                value={values.name}
                disabled
              />
              <FormInput 
                Icon={BsFillPersonFill}
                id="last_name"
                value={values.last_name}
                disabled
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
                placeholder="Dirección"
                value={values.address}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.address}
                touched={touched.address}
              />
              <FormInput 
                Icon={BiSolidKey}
                id="password"
                placeholder="Nueva Contraseña"
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
                type="submit"
                disabled={!isValid || isLoading}
              >
                {
                  isLoading
                  ? <>
                      <Spinner 
                        size="sm"
                      />
                      {" "}
                      Actualizando... 
                    </>
                  : "Actualizar"
                }
              </Button>
            </Form>
          )}
        </Formik>
      </Section>
      {
        user.user_type === "client"
        && <Plan>
            {
              user.plan[0]
              ? <>
                <TitleSection>
                  <Title> Plan {plan?.name} </Title>
                  <GiBiceps 
                    color="white"
                    size={30}
                    style={{marginTop: "-15px"}}
                  />
                </TitleSection>
                <FlexRow>
                  <FlexColumn>
                    <Title
                      color={COLORS.orange}
                      size={1.4}
                    >
                      Te quedan
                    </Title>
                    <Title
                      size={1.2}
                    >
                      { user.days_remaining } días
                    </Title>
                  </FlexColumn>
                  <FlexColumn>
                    <Title
                      color={COLORS.orange}
                      size={1.4}
                    >
                      Pagado
                    </Title>
                    <Title
                      size={1.2}
                    >
                      S/. { plan?.price }
                    </Title>
                  </FlexColumn>
                </FlexRow>
                </>

              : <>
                  <Title>
                    Contrata un Plan ahora!
                  </Title>
                  <Text>
                    Y disfruta de nuestros beneficios!
                  </Text>
                  <Button
                    onClick={() => handleClick()}
                    Icon={GiBiceps}
                    filled
                  >
                    {
                      planLoading
                      ? <>
                          Cargando...
                          {" "}
                          <Spinner size="sm" />
                        </>
                      : "Obtener un plan"
                    }
                  </Button>
                </>
            }
            
          </Plan>
      }
    </Container>
  );
}

export default Profile;
