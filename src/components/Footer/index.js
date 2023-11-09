import { useNavigate } from "react-router-dom";
import { Container, Div, Line, Link, Logo, Section } from "./styles";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"

function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo
        onClick={() => navigate("/")}
        alt="logo-mr-gym"
        src="/assets/logo.png"
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
            <img/>
            <BsFacebook/>
            Facebook
          </Link>
          <Link
            target="_blank"
            href="about:blank"
          >
            <img/>
            <AiOutlineInstagram/>
            Instagram
          </Link>
          <Link
            target="_blank"
            href="about:blank"
          >
            <img/>
            <FaTiktok/>
            Tik Tok
          </Link>
          <Link
            target="_blank"
            href="about:blank"
          >
            <img/>
            <BsLinkedin/>
            Linkedln
          </Link>
        </Div>
      </Section>
      <Line />
    </Container>
  );
}

export default Footer;
