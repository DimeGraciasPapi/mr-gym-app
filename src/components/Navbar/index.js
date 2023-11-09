/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Container, Logo, Section, toggleStyles } from "./styles";
import { HiMenuAlt2, HiOutlineLogout } from "react-icons/hi";
import { COLORS } from "../../styles/colors";
import { IoClose } from "react-icons/io5";
import NavItem from "./navItem";
import Button from "../Button";
import { BsFillPeopleFill, BsFillCalendarFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { CgProfile } from "react-icons/cg";
import { GiBiceps } from "react-icons/gi";
import { useData } from "../../context/data";

function Navbar() {
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const [dropdownProfile, setDropDownProfile] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setModal } = useData();
  const location = useLocation();
  
  const handleMenu = () => setDropDownMenu(!dropdownMenu);
  const handleProfile = () => setDropDownProfile(!dropdownProfile);

  const handleClick = (to) => {
    window.scrollTo(0, 0);
    if(user && user.user_type === "client" && to === "/") return;

    navigate(to)
  }
  
  const handleModal = (action) => {
    setModal((modal) => ({
      action,
      isOpen: !modal.isOpen,
    }));
  };

  return (
    <Container>
      {/* menu */}
      <Dropdown isOpen={dropdownMenu} toggle={handleMenu} direction="down">
        <DropdownToggle css={toggleStyles}>
          {dropdownMenu ? (
            <IoClose color={COLORS.black} size={20} />
          ) : (
            <HiMenuAlt2 color={COLORS.black} size={20} />
          )}
        </DropdownToggle>
        <DropdownMenu dark style={{ marginTop: "0.5rem" }}>
          {
            user && user.user_type === "client"
            ? ""
            : <NavItem Icon={AiFillHome} to="/">
                Inicio
              </NavItem>
          }
          <NavItem Icon={BsFillCalendarFill} to="/planes">
            Nuestros planes
          </NavItem>
          <NavItem Icon={FaMapMarkerAlt} to="/ubicanos">
            Ubícanos
          </NavItem>
          <NavItem Icon={GiBiceps} to="/mr-gym-go" active={location.pathname.includes("mr-gym-go")}>
            Mr. Gym Go
          </NavItem>
        </DropdownMenu>
      </Dropdown>
      {/* logo */}
      <Logo
        onClick={() => handleClick("/")}
        alt="logo-mr-gym"
        src="/assets/logo.png"
      />
      {/* buttons */}
      <Section>
        {user ? (
          <Dropdown
            direction="down"
            isOpen={dropdownProfile}
            toggle={handleProfile}
          >
            <DropdownToggle
              style={{
                padding: 0,
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <Button filled Icon={BsFillPeopleFill}>
                {user.name}
              </Button>
            </DropdownToggle>
            <DropdownMenu dark end style={{ marginTop: "0.5rem" }}>
              <NavItem Icon={CgProfile} to="/perfil">
                Perfil
              </NavItem>
              <NavItem Icon={HiOutlineLogout} to="/" isToLogout>
                Cerrar sesión
              </NavItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <Button
              Icon={BsFillPeopleFill}
              onClick={() => handleModal("register")}
            >
              Regístrate
            </Button>
            <Button filled onClick={() => handleModal("login")}>
              Inicia Sesión
            </Button>
          </>
        )}
      </Section>
    </Container>
  );
}

export default Navbar;
