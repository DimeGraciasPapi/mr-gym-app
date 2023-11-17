import { ClimbingBoxLoader } from "react-spinners";
import { Container } from "./styles";

function Loader() {
  return (
    <Container>
      <ClimbingBoxLoader 
        size={20}
        color="white"
      />

    </Container>
  );
}

export default Loader;
