import { Spinner } from "reactstrap";
import Button from "../../../components/Button";
import Search from "../../../components/Search";
import { useData } from "../../../context/data";
import { Title } from "../../../styles/layout";
import { FlexRow, Section } from "./styles";
import { IoMdPersonAdd } from "react-icons/io";
import Card from "../../../components/Card";

function Members() {
  const { isGetting, members } = useData();

  return (
    <>
      <Title>Gestión de miembros</Title>
      <FlexRow>
        <Search />
        <Button
          filled
          color="secondary"
          Icon={IoMdPersonAdd}
        >
          Nuevo miembro
        </Button>
      </FlexRow>
      <Section isLoading={isGetting}>
        {
          isGetting
          ? <Spinner />
          : members.map((member, index) => (
              <Card
                key={index}
                member={member}
              />
            ))
        }
      </Section>
    </>
  )
}

export default Members;
