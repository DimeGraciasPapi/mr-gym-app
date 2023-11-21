import { useState } from "react";
import Button from "../../../../components/Button";
import { Container, Title } from "./styles";
import { GiBiceps } from "react-icons/gi";
import getLinkToPay from "../../../../helpers/preference";
import { useData } from "../../../../context/data";
import { Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/auth";

function Failure() {
  const [isLoading, setIsLoading] = useState(false);
  const { plans, setChosenPlan } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    setIsLoading(true);
    const link = await getLinkToPay(plans[0], user);
    setChosenPlan({ ...plans[0], link });
    setIsLoading(false);
    navigate("/choose-plan");
  }

  return (
    <Container>
      <Title> Algo salió mal en la compra de tu suscripción. :(</Title>
      <Button
        filled
        Icon={GiBiceps}
        onClick={() => handleClick()}
      >
        {
          isLoading
          ? <>
              Cargando...
              {" "}
              <Spinner size="sm" />
            </>
          : "Volver a intentarlo"
        }
      </Button>
    </Container>
  );
}

export default Failure;
