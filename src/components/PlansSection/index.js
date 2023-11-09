import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useData } from "../../context/data";
import Button from "../Button";
import { Container, Plan, Section, Text, Title } from "./styles";
import { GiBiceps } from "react-icons/gi";

function PlansSection() {
  const { plans, setModal } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if(user) return navigate("/choose-plan");

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
              <p> Sin multa por cancelamiento </p>
              <p> Suscripción de {plan.remaining / 30} meses</p>
              {
                plan.benefits.split(",").map((benefit, index) => (
                  <p key={index}>{benefit.trim()}</p>
                ))
              } 
              <p> Acceso a todas las áreas del gimnasio </p>
              <p> Sin cargo por cancelación </p>
              <p><b> Servicios </b></p>
              <ul>
                <li><p> Duchas </p></li>
                <li><p> Vestidores </p></li>
              </ul>
              <Button
                onClick={() => handleClick()}
                Icon={GiBiceps}
                filled={plan.name !== "Black"}
                style={{alignSelf: "center"}}
              >
                Obtener plan
              </Button>
            </Plan>
          ))
        }
      </Section>
    </Container>
  );
}

export default PlansSection;
