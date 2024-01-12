import { useNavigate } from "react-router-dom";
import { Container, FlexColumn, FlexRow, Section, Text } from "./styles";
import { useData } from "../../context/data";
import { ImWhatsapp } from "react-icons/im";
import capitalize from "../../helpers/capitalize";

function Card({ member }) {
  const navigate = useNavigate();
  const { setMembers, backup, plans } = useData();
  const plan = plans.find((plan) => plan.id === member.plan[0]);

  const handleClick = () => {
    navigate(`/miembros/${member.id}`);
    setMembers(backup.members);
  }

  return (
    <Container
      onClick={handleClick}
    >
      <Section>
        <Text>{ `${capitalize(member.name.toLowerCase())} ${capitalize(member.last_name.toLowerCase())}` }</Text>
        <FlexRow>
          <ImWhatsapp 
            size={17}
          />
          <Text
            size={15.6}
            weight={500}
          >
            +51 {member.phone}
          </Text>
        </FlexRow>
      </Section>
      <FlexRow full>
        <FlexColumn>
          <Text size={16}>
            DNI
          </Text>
          <Text
            size={15.5}
            weight={500}
          >
            {member.dni}
          </Text>
        </FlexColumn>
        <FlexColumn>
          <Text size={16}>
            Plan
          </Text>
          <Text
            size={15.5}
            weight={500}
          >
            { 
              plan
              ? plan.name
              : "No contratado"
            }
          </Text>
        </FlexColumn>
        <FlexColumn>
          <Text size={16}>
            Días
          </Text>
          <Text
            size={15.5}
            weight={500}
          >
            { member.days_remaining }
          </Text>
        </FlexColumn>
        {
          plan 
          &&
          <FlexColumn>
            <Text size={16}>
              Pagado
            </Text>
            <Text
              size={15.5}
              weight={500}
            >
              S/. { plan?.price }
            </Text>
          </FlexColumn>
        }
      </FlexRow>
    </Container>
  )
}

export default Card;
