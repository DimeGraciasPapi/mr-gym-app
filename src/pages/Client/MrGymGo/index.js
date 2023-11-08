import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useData } from "../../../context/data";
import { Container } from "../styles";
import { Card, FlexColumn, GymSection, Icon, Image, Section, Text, Title } from "./styles";
import { GiBiceps } from "react-icons/gi";
import { DATA } from "../../../data";
import { useAuth } from "../../../context/auth";

function MrGymGo() {
  const { user } = useAuth();
  const { setModal } = useData();
  const navigate = useNavigate();

  const handleClick = (to) => {
    window.scrollTo(0, 0);

    navigate(to)
  }

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
                onClick={() => user ? "" : setModal(modal => ({action: "register", isOpen: !modal.isOpen}))}
              >
                {
                  user
                  ? "EMPIEZA A ENTRENAR!"
                  : "REGÍSTRATE YA!"
                }
              </Button>
          </FlexColumn>
        </Section>
      </Container>
      {
        DATA.GymGo.map((item, index) => (
          <GymSection
            key={index}
            src_img={item.img_src}
            isLeft={item.isLeft}
          >
            <Card isImage>
              <Image 
                alt={`mr_gym_go_${index}`}
                src={`assets/photo/${item.img_src}`}
              />
            </Card>
            <Card>
              <Title
                size={1.6}
                color="black"
              >
                { item.title }
              </Title>
              <Text size={15}>{ item.description }</Text>
              <Button
                onClick={() => handleClick(item.to)}
                filled
                Icon={GiBiceps}
              >
                Vamos a por ello
              </Button>
            </Card>
          </GymSection>
        ))
      }
    </>
  );
}

export default MrGymGo;
