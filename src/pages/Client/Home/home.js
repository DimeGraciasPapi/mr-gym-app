import Button from "../../../components/Button";
import { Container, Logo, Section, Text, Title } from "./styles";

function Home() {
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
            filled
          >
            Encuentra tu gimnasio
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
            filled
          >
            Encuentra tu gimnasio
          </Button>
        </Section>
      </Container>
    </>
  );
}

export default Home;
