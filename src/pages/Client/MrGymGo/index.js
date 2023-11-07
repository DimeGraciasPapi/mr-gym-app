import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useData } from "../../../context/data";
import { Container } from "../styles";
import { Card, FlexColumn, GymSection, Icon, Image, Section, Text, Title } from "./styles";
import { GiBiceps } from "react-icons/gi";

function MrGymGo() {
  const { setModal } = useData();
  const navigate = useNavigate();

  return (
    <>
      <Container
        src_img="mr_gym_go.jpeg"
        positionY={100}
      >
        <Section>
          <FlexColumn>
            <Title>
              Entrenamientos, series y más.
              Gratis para todos
            </Title>
            <Text>
              En cualquier momento y la hora
              que desees.
            </Text>
          </FlexColumn>
          <FlexColumn>
            <Icon />
            <Button
              filled
              onClick={() => setModal(modal => ({action: "register", isOpen: !modal.isOpen}))}
            >
              REGISTRATE YA!
            </Button>
          </FlexColumn>
        </Section>
      </Container>
      <GymSection src_img="gym_1.jpeg">
        <Card isImage>
          <Image 
            alt="mr_gym_go"
            src="assets/photo/gym_1.jpeg"
          />
        </Card>
        <Card>
          <Title
            size={1.6}
            color="black"
          >
            Cardio y Ritmo
          </Title>
          <Text size={15}>
            ¿Estás buscando una manera de mejorar tu salud
            cardiovascular? ¡Tenemos la solución perfecta
            para ti en nuestro gimnasio! Ofrecemos una amplia
            variedad de máquinas de cardio, desde cintas de
            correr y bicicletas estáticas, todas diseñadas
            para ayudarte a aumentar tu resistencia y mejorar
            la salud de tu corazón.
          </Text>
          <Button
            onClick={() => navigate("cardio-ritmo")}
            filled
            Icon={GiBiceps}
          >
            Vamos a por ello
          </Button>
        </Card>
      </GymSection>
      <GymSection src_img="gym_2.jpeg">
        <Card>
          <Title
            size={1.6}
            color="black"
          >
            Fuerza y Resistencia
          </Title>
          <Text size={15}>
            ¿Estás buscando una manera de mejorar tu salud
            cardiovascular? ¡Tenemos la solución perfecta
            para ti en nuestro gimnasio! Ofrecemos una amplia
            variedad de máquinas de cardio, desde cintas de
            correr y bicicletas estáticas, todas diseñadas
            para ayudarte a aumentar tu resistencia y mejorar
            la salud de tu corazón.
          </Text>
          <Button
          onClick={() => navigate("fuerza-resistencia")}
            filled
            Icon={GiBiceps}
          >
            Vamos a por ello
          </Button>
        </Card>
        <Card isImage>
          <Image 
            alt="mr_gym_go"
            src="assets/photo/gym_2.jpeg"
          />
        </Card>
      </GymSection>
      <GymSection 
        src_img="gym_3.jpeg"
        positionY={50}
      >
        <Card isImage>
          <Image 
            alt="mr_gym_go"
            src="assets/photo/gym_3.jpeg"
          />
        </Card>
        <Card>
          <Title
            size={1.6}
            color="black"
          >
            Cuerpo y mente
          </Title>
          <Text size={15}>
            ¿Quieres fortalecer tus músculos y mejorar tu
            fuerza física? ¡Tenemos lo que necesitas en
            nuestro gimnasio! Contamos con una amplia
            variedad de equipos de entrenamiento de fuerza,
            desde pesas libres y máquinas de musculación
            hasta entrenamientos de alta intensidad y clases
            de levantamiento de pesas.
          </Text>
          <Button
            onClick={() => navigate("cuerpo-mente")}
            filled
            Icon={GiBiceps}
          >
            Vamos a por ello
          </Button>
        </Card>
      </GymSection>
    </>
  );
}

export default MrGymGo;
