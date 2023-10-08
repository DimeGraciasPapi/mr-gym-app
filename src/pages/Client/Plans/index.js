import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Container, Logo, Plan, PlanSection, PlanTitle, Plans, PlantText, Section, Text, Title } from "../Plans/styles";
import { get } from "../../../services";
import { GiBiceps } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function PlansPage({ setModal }) {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const allPlans = await get("plans");
      allPlans.reverse();

      setPlans(allPlans);
    }

    fetch();
  }, []);

  return (
    <>
      <Container>
        <Section>
          <Title> Muchas opciones </Title>
          <Text>
            !Obtenga mucho más de lo que paga
            sin cuota de inscripción!.
            Con más de 330 gimnasios en todo el país
            para elegir, clases ilimitadas y más equipos
            de primer nivel.
          </Text>
          <Button
            onClick={() => navigate("/ubicanos")}
            filled
          >
            Encuentranos
          </Button>
        </Section>
        <Logo
          alt="logo-mr-gym"
          src="assets/logo.png"
        />
        <Section right>
          <Title> Muchas opciones </Title>
          <Text right>
            !Obtenga mucho más de lo que paga
            sin cuota de inscripción!.
            Con más de 330 gimnasios en todo el país
            para elegir, clases ilimitadas y más equipos
            de primer nivel.
          </Text>
          <Button
            onClick={() => navigate("/ubicanos")}
            filled
          >
            Encuentranos
          </Button>
        </Section>
      </Container>
      <Plans>
        <Plan
          black
          position="row"
        >
          <PlanTitle> PLANES </PlanTitle>
          <PlantText>
            ¡Planes con precio bajo y fácil
            adhesión! Haga todo en línea :-)
          </PlantText>
        </Plan>
        <PlanSection>
          {
            plans.map((plan, index) => (
              <Plan
                position="row"
                isCard
                key={index}
                black={plan.name === "Black"}
              >
                <PlanTitle
                  isCard
                  black={plan.name === "Black"}
                > 
                  <i> Plan {plan.name} </i>
                </PlanTitle>
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
                  onClick={() => setModal(modal => ({action: "register", isOpen: !modal.isOpen}))}
                  Icon={GiBiceps}
                  filled={plan.name !== "Black"}
                  style={{alignSelf: "center"}}
                >
                  Obtener plan
                </Button>
              </Plan>
            ))
          }
        </PlanSection>
      </Plans>
    </>
  );
}

export default PlansPage;
