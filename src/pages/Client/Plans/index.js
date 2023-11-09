import Button from "../../../components/Button";
import { Logo, Section, Text, Title } from "../Plans/styles";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles";
import PlansSection from "../../../components/PlansSection";

function PlansPage() {
  const navigate = useNavigate();

  return (
    <>
      <Container
        src_img="weight.jpeg"
        positionY={90}
      >
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
      <PlansSection />
    </>
  );
}

export default PlansPage;
