import { useState } from "react";
import Aside from "./components/Aside";
import NavAdmin from "./components/Navbar/Admin";
import { Container, Section } from "./styles/layout";

function Admin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <NavAdmin 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Aside 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Section>

      </Section>
    </Container>
  );
}

export default Admin;
