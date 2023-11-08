import { useNavigate } from "react-router-dom";
import { Back, Card, Container, Description, Icon, List, Section, Text, Title } from "./styles";
import { DATA } from "../../data";

function MainGymPage({ search }) {
  const info = DATA.GymGo.find(item => item.title.toLowerCase().includes(search));
  const navigate = useNavigate();

  const handleClick = (to) => {
    window.scrollTo(0, 0);

    navigate(to);
  }

  return (
    <Container>
      <Back 
        onClick={() => window.history.back()}
      />
      <Section>
        <Description>
          <Title>{ info.title }</Title>
          <Text>{ info.description }</Text>
        </Description>
        <Icon
          color={info.color}
        >
          <info.Icon />
        </Icon>
      </Section>
      <List>
        {
          info.list.map((item, index) => (
            <Card
              src_img={`/assets/photo/${item.src_img}`}
              key={index}
              onClick={() => handleClick(item.to)}
            >
              <h3 className="title">{ item.title }</h3>
            </Card>
          ))
        }
      </List>
    </Container>
  );
}

export default MainGymPage;
