/** @jsxImportSource @emotion/react */
import Button from "../../../components/Button";
import { Container } from "../styles";
import { Card, CardText, CardTitle, Guide, IconStyle, Info, Section, StepCard, Steps, Text, Title } from "./styles";
import { BsFillPersonLinesFill, BsUniversalAccessCircle, BsArrowRight, BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiSolidPaperPlane } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiCursorClickBold } from "react-icons/pi";
import { COLORS } from "../../../styles";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context/data";

function Home() {
  const navigate = useNavigate();
  const { setModal } = useData();

  const handleClick = (to) => {
    window.scrollTo(0, 0);

    navigate(to);
  }

  return (
    <>
      <Container
        src_img="main.jpeg"
        positionY={1}
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
          <Button
            onClick={() => setModal(modal => ({action: "register", isOpen: !modal.isOpen}))}
            filled
            Icon={BsFillPersonLinesFill}
          >
            Registrarme
          </Button>
        </Section>
      </Container>
      <Info>
        <Card>
            <AiOutlineCheckCircle
              css={IconStyle}
              size={60}
            />
          <CardTitle>
            Facilidades
          </CardTitle>
          <CardText>
            ¡Transformamos lo complicado en simple! Porque
            pensamos en tu comodidad, en Gimnasios Mister Gym
            puedes realizar diferentes procesos online: inscripción
            transferencia de unidad, etc. Además, nuestros
            modelos de entrenamientos fueron diseñados para que
            cumplas tu rutina de forma autónoma.
          </CardText>
        </Card>
        <Card>
            <BiSolidPaperPlane
              css={IconStyle}
              size={58}
            />
          <CardTitle>
            Presencia
          </CardTitle>
          <CardText>
            Contamos con una sede en Huancayo del Gimnasio Mister Gym,
            sin duda en esta uńica sede contamos con toda la comodidad,
            seguridad y los mejores resultados ya que contamos con los
            mejores instructores de la zona.
          </CardText>
        </Card>
        <Card>
            <BsUniversalAccessCircle
              css={IconStyle}
              size={50}
            />
          <CardTitle>
            Accesibilidad
          </CardTitle>
          <CardText>
            Nuestra misión es entregar fitness de alta calidad y ser accesibles
            para todos. Por ello, nuestros gimnasios cuentan con tecnología de
            última generación y moderna infraestructura que te ayudarán a cumplir
            tus objetivos y vivir la mejor experiencia.
          </CardText>
        </Card>
      </Info>
      <Container
        height={90}
        src_img="main.jpeg"
        positionY={100}
      >
        <Guide>
          <Title
            isOrange
          >
            ¡Únete a Gimnasio Mister Gym!
          </Title>
          <Text
            centered
          >
            Realiza tu inscripción en tan sólo 5 minutos y comienza tu entrenamiento
            en la mayor cadena de gimanasios de Latinoámerica.
          </Text>
          <Steps>
            <StepCard
              onClick={() => handleClick("/ubicanos")}
            >
              <FaLocationDot 
                color={COLORS.gray}
                size={40}
              />
              <p>
                Localiza el local
              </p>
            </StepCard>
            <BsArrowRight
              color="white"
              size={60}
            />
            <StepCard
              onClick={() => handleClick("/planes")}
            >
              <PiCursorClickBold 
                color={COLORS.gray}
                size={40}
              />
              <p>
                Selecciona tu plan
              </p>
            </StepCard>
            <BsArrowRight
              color="white"
              size={60}
            />
            <StepCard
              onClick={() => setModal(modal => ({action: "register", isOpen: !modal.isOpen}))}
            >
              <BsFillPersonPlusFill 
                color={COLORS.gray}
                size={40}
              />
              <p>
                ¡Regístrate y listo!
              </p>
            </StepCard>
          </Steps>
        </Guide>
      </Container>
    </>
  );
}

export default Home;
