import Button from "../../../components/Button";
import { useData } from "../../../context/data";
import { Container } from "../styles";
import { FlexColumn, Icon, Section, Text, Title } from "./styles";

function MrGymGo() {
  const { setModal } = useData();

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
    </>
  );
}

export default MrGymGo;
