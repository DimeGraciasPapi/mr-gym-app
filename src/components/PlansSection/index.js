import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useData } from "../../context/data";
import Button from "../Button";
import { Container, Plan, Section, Text, Title } from "./styles";
import { GiBiceps } from "react-icons/gi";
import getLinkToPay from "../../helpers/preference";
import { useState } from "react";
import { Spinner } from "reactstrap";

function PlansSection() {
  const [ isLoading, setIsLoading ] = useState(false);
  const { plans, setModal, setChosenPlan } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = async (plan) => {
    if(user) {
      setIsLoading(true);
      const link = await getLinkToPay(plan, user);
      setChosenPlan({ ...plan, link });
      setIsLoading(false);
      navigate("/choose-plan");
      window.scroll(0, 0);
      return;
    }

    setModal(modal => ({action: "register", isOpen: !modal.isOpen}))
  }

  return (
    <Container>
      <Plan
        black
        position="row"
      >
        <Title> PLANES </Title>
        <Text>
          ¡Planes con precio bajo y fácil
          adhesión! Haga todo en línea :-)
        </Text>
      </Plan>
      <Section>
        {
          plans.map((plan, index) => (
            <Plan
              position="row"
              isCard
              key={index}
              black={plan.name === "Black"}
            >
              <Title
                isCard
                black={plan.name === "Black"}
              > 
                <i> Plan {plan.name} </i>
              </Title>
              <p> {plan.description} </p>
              <p> S/. {plan.price} </p>
              <p> Mantenimiento: S/. 00.00 </p>
              <p> Rutinas personalizadas </p>
              <p> Máquinas de alto rendimiento </p>
              <p> Suscripción de {plan.remaining / 30} meses</p>
              {
                plan.benefits.split(",").map((benefit, index) => (
                  <p key={index}>{benefit.trim()}</p>
                ))
              } 
              <p> Acceso a todas las áreas del gimnasio </p>
              <p><b> Servicios </b></p>
              <ul>
                <li><p> Duchas </p></li>
                <li><p> Vestidores </p></li>
                <li><p> Equipos prestados </p></li>
              </ul>
              <Button
                onClick={() => handleClick(plan)}
                Icon={GiBiceps}
                filled={plan.name !== "Black"}
                style={{alignSelf: "center"}}
              >
                {
                  isLoading
                  ? <>
                      Cargando...
                      {" "}
                      <Spinner size="sm" />
                    </>
                  : "Obtener plan"
                }
              </Button>
            </Plan>
          ))
        }
      </Section>
    </Container>
  );
}

export default PlansSection;
