import Button from "../../../components/Button";
import { useData } from "../../../context/data";
import { Checkbox, Container, FlexColumn, FlexRow, Header, Link, Loader, Plan, Section, Text, Title } from "./styles";
import { FaCheck } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { useState } from "react";
import getLinkToPay from "../../../helpers/preference";
import { Spinner } from "reactstrap";

function ChoosePlan() {
  const [isLoading, setIsLoading] = useState(false);
  const { chosenPlan, plans, setChosenPlan } = useData();

  const handleClick = async (plan) => {
    setIsLoading(true);
    const link = await getLinkToPay(plan);
    setChosenPlan({ ...plan, link });
    setIsLoading(false);
  }

  return (
    <Container>
      <Section width={850}>
        <Header>
          <Title>Seleccionaste el plan <u>{ chosenPlan.name }</u></Title>
        </Header>
        {
          plans.map((item, index) => {
            const isBlack = item.name.toLowerCase().includes("black"); 
            const isActive = chosenPlan.id === item.id;
            const months = item.remaining / 30;

            return (
              <Plan
                key={index}
                isBlack={isBlack}
                onClick={() => handleClick(item)}
              >
                <FlexRow width="100%" justify="space-between">
                  <FlexRow gap="0.5rem">
                    <Checkbox isBlack={isBlack}>
                      {
                        isActive && <FaCheck /> 
                      }
                    </Checkbox>
                    <Text>PLAN { item.name.toUpperCase() }</Text>
                  </FlexRow>
                  <FlexColumn>
                    <Text> Inscripción </Text>
                    <Text> S/. 0.00 </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text> Permanencia </Text>
                    <Text> { months } meses </Text>
                  </FlexColumn>
                  <Text> S/. { item.price }.00 </Text>
                </FlexRow>
                <Text>{ item.description }</Text>
                {
                  isLoading 
                  && <Loader>
                      <Spinner />
                    </Loader>
                }
              </Plan>
            )
          })
        }
        <Button
          filled
          Icon={GiBiceps}
        >
          <Link
            href={chosenPlan.link}
          >
            {
              isLoading
              ? <>
                  Cargando...
                  {" "}
                  <Spinner size="sm" />
                </>
              : "Continuar"
            }
          </Link>
        </Button>
      </Section>
      <Section width={400}>
        <FlexColumn
          padding="1rem"
          gap={1.5}
          width="100%"
        >
          <Text align="start"> Usted está comprando el: <br /> <b> Plan { chosenPlan.name } </b> </Text>
        </FlexColumn>
        <FlexColumn
          withBg
          gap={1}
          width="100%"
          padding="1rem 2rem"
        >
          <FlexRow justify="space-between">
            <Text>1° Pago</Text>
            <Text>S/. {chosenPlan.price}.00</Text>
          </FlexRow>
          {
            Array.from({ length: (chosenPlan.remaining / 30) - 1 }).map((_item, index) => (
              <FlexRow
                key={index}
                justify="space-between"
              >
                <Text>{index + 2}° Pago</Text>
                <Text>S/. 00.00</Text>
              </FlexRow>
            ))
          }
        </FlexColumn>
      </Section>
    </Container>
  );
}

export default ChoosePlan;
