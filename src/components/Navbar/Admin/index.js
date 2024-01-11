import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FlexRow, Logo } from "./styles";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import Button from "../../Button";
import { useAuth } from "../../../context/auth";
import { BsFillPeopleFill } from "react-icons/bs";
import NavItem from "../navItem";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout, HiMenuAlt2 } from "react-icons/hi";

function NavAdmin({ isOpen, setIsOpen }) {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const toggle = () => setDropdown(!dropdown);

  return (
    <Container>
      <FlexRow>
        {
          !isOpen
          &&
          <HiMenuAlt2 
            className="menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        }
        <Logo 
          onClick={() => navigate("/")}
          alt="mr-gym-logo"
          src="/assets/logo.png"
        />
      </FlexRow>
      <Dropdown
        direction="down"
        isOpen={dropdown}
        toggle={toggle}
      >
        <DropdownToggle
          tag="span"
        >
          <Button
            filled
            Icon={BsFillPeopleFill}
          >
            { user.name }
          </Button>
        </DropdownToggle>
        <DropdownMenu dark end style={{ marginTop: "1rem" }}>
          <NavItem Icon={CgProfile} to="/perfil">
            Perfil
          </NavItem>
          <NavItem Icon={HiOutlineLogout} to="/" isToLogout>
            Cerrar sesión
          </NavItem>
        </DropdownMenu>
      </Dropdown>
    </Container>
  )
}

export default NavAdmin;
