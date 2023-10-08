import { Container } from "../styles";
import { Section, Text, Title } from "./styles";

function Home() {
  return (
    <>
      <Container
        src_img="main.jpeg"
        positionY={20}
      >
        <Section>
          <Title>Gimnasio</Title>
          <Title isOrange>Mister Gym</Title>
          <Text>
            Somos la mayor cadena de gimnasios de
            Latinoámerica y tenemos el propósito
            de ofrecer fitness de alta calidad
            para todos, en un ambiente cómodo y con
            la mejor tecnología para potenciar tu
            entrenamiento.
          </Text>
        </Section>
      </Container>
    </>
  );
}

export default Home;
