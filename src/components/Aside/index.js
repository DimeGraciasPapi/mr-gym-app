import NavItem from "./NavItem";
import { BackDrop, Container } from "./styles";
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { GiBiceps } from "react-icons/gi";

function Aside({ isOpen, setIsOpen }) {
  return (
    <>
      <BackDrop 
        onClick={() => setIsOpen(!isOpen)} 
        isOpen={isOpen}
      />
      <Container isOpen={isOpen}>
        <NavItem
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          Icon={FaHome}
          to="/"
          name="Inicio"
        />
        <NavItem
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          Icon={BsFillPeopleFill}
          to="/gestion"
          name="Gestión de miembros"
        />
        <NavItem
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          Icon={FaCalendarAlt}
          to="/clases"
          name="Clases y horarios"
        />
        <NavItem
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          Icon={RiCheckboxMultipleFill}
          to="/asistencia"
          name="Registro de asistencia"
        />
        <NavItem
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          Icon={GiBiceps}
          to="/planes"
          name="Planes"
        />
      </Container>
    </>
  );
}

export default Aside;
