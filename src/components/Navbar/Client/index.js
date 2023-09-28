/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Container, Logo, Section, toggleStyles } from "./styles";
import { HiMenuAlt2 } from "react-icons/hi";
import { COLORS } from "../../../styles/colors";
import { IoClose } from "react-icons/io5";
import NavItem from "./navItem";
import Button from "../../Button";
import { BsFillPeopleFill, BsFillCalendarFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Client({ setModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(prevState => !prevState);

  const handleModal = (action) => {
    setModal(modal => (
      {
        action,
        isOpen: !modal.isOpen
      }
    ));
  }

  return (
    <Container>
      {/* menu */}
      <Dropdown
        isOpen={isOpen}
        toggle={toggle}
        direction="down"
      >
        <DropdownToggle
          css={toggleStyles}
        >
          {
            isOpen
            ? <IoClose 
                color={COLORS.black}
                size={20}
              />
            : <HiMenuAlt2 
                color={COLORS.black}
                size={20}
              />
          }
        </DropdownToggle>
        <DropdownMenu dark style={{marginTop: "0.5rem"}}>
          <NavItem Icon={AiFillHome} to="/" > Inicio </NavItem>
          <NavItem Icon={BsFillCalendarFill} to="/planes" > Nuestros planes </NavItem>
          <NavItem Icon={FaMapMarkerAlt} to="/ubicanos" > Ubícanos </NavItem>
        </DropdownMenu>
      </Dropdown>
      {/* logo */}
      <Logo 
        onClick={() => navigate("/")}
        alt="logo-mr-gym"
        src="assets/logo.png"
      />
      {/* buttons */}
      <Section>
        <Button 
          Icon={BsFillPeopleFill}
          onClick={() => handleModal("register")}
        >
          Regístrate
        </Button>
        <Button
          filled
          onClick={() => handleModal("login")}
        > 
          Inicia Sesión
        </Button>
      </Section>
    </Container>
  );
}

export default Client;
