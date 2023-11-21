import { useLocation, useNavigate } from "react-router-dom";
import { Container, FlexRow, Loader, Title } from "./styles";
import { useEffect, useState } from "react";
import { MERCADO_PAGO_TOKEN } from "../../../../config";
import { useAuth } from "../../../../context/auth";
import { update } from "../../../../services";
import { Spinner } from "reactstrap";
import Button from "../../../../components/Button";
import { GiBiceps } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

function Success() {
  const [pay, setPay] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useLocation();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const pay_id = search.split("&").find(item => item.includes("collection_id")).split("=")[1];

  useEffect(() => {
    if(!pay_id) return navigate("/mr-gym-go");

    const init = async () => {
      try{
        let response = await fetch(`https://api.mercadopago.com/v1/payments/${pay_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${MERCADO_PAGO_TOKEN}`
          }
        });

        response = await response.json();
        const item = response.additional_info.items[0];
        if(item.category_id !== user.id) return navigate("/choose-plan/failure");
        
        setPay(response);
        const userUpdated = await update("users", { planId: item.id }, user.id);
        setUser(userUpdated);
        setIsLoading(false);
      }catch(e) {
        console.error(e);
        navigate("/choose-plan/failure");
        setIsLoading(false);
      }
    }

    init();
  }, [ navigate, pay_id, setUser, user.id ]);

  return (
    <Container>
      {
        isLoading
        ? <Loader>
            <Spinner />
          </Loader>
        : <>
            <Title> 
              Tu suscripción al <b>{ pay.additional_info.items[0].title } </b> 
              se ha completado, por un monto de <b>S/. { pay.transaction_amount }</b>
            </Title>
            <FlexRow>
              <Button
                filled
                Icon={GiBiceps}
                onClick={() => navigate("/mr-gym-go")}
              >
                Entrenar ahora!
              </Button>
              <Button
                filled
                Icon={CgProfile}
                onClick={() => navigate("/perfil")}
              >
                Ir a mi Perfil
              </Button>
            </FlexRow>
          </>
      }
    </Container>
  );
}

export default Success;
