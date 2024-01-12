import { useEffect, useState } from "react";
import Aside from "./components/Aside";
import NavAdmin from "./components/Navbar/Admin";
import { Container, Section } from "./styles/layout";
import { Route, Routes } from "react-router-dom";
import Members from "./pages/Admin/Members";
import { useData } from "./context/data";
import { get } from "./services";

function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const { setRegisters, setMembers, setIsGetting, setBackup } = useData();

  useEffect(() => {
    const fetch = async () => {
      setIsGetting(true);

      try {
        // get registers
        const registers = await get("registers");
        setRegisters(registers);
    
        // get members
        const users = await get("users");
        setMembers(users.clients);
        setBackup((prev) => ({...prev, members: users.clients}));
  
        setIsGetting(false)
      }catch(e) {
        console.error(e);

        setIsGetting(false);
      }
    }

    fetch();
  }, [setMembers, setRegisters, setIsGetting, setBackup]);

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
        <Routes>
          <Route path="/miembros" element={<Members />} />
        </Routes>
      </Section>
    </Container>
  );
}

export default Admin;
