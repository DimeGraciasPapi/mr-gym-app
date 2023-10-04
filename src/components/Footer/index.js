import { useNavigate } from "react-router-dom";
import { Container, Div, Line, Link, Logo, Section } from "./styles";

function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo
        onClick={() => navigate("/")}
        alt="logo-mr-gym"
        src="assets/logo.png"
      />
      <Line />
      <Section>
        <Div>
          <Link><b> Gimnasio Mister Gym </b></Link>
          <Link
            href="#"
          > 
            ¿Quiénes somos?
          </Link>
          <Link
            href="#"
          > 
            Habla con nosotros
          </Link>
          <Link
            href="#"
          > 
            FAQ
          </Link>
          <Link
            href="#"
          > 
            Política de datos personales
          </Link>
        </Div>
        <Div>
          <Link><b> Planes </b></Link>
          <Link
            onClick={() => navigate("/planes")}
            isLink
          >
            Conoce nuestros planes
          </Link>
          <Link 
            href="#"
          >
            Documentos
          </Link>
        </Div>
        <Div>
          <Link><b> Síguenos </b></Link>
          <Link
            target="_blank"
            href="about:blank"
          >
            Facebook
          </Link>
          <Link
            target="_blank"
            href="about:blank"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            href="about:blank"
          >
            Tik Tok
          </Link>
          <Link
            target="_blank"
            href="about:blank"
          >
            Linkedln
          </Link>
        </Div>
      </Section>
      <Line />
    </Container>
  );
}

export default Footer;
