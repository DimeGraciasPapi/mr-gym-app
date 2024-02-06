import { useEffect, useState } from "react";
import Aside from "./components/Aside";
import NavAdmin from "./components/Navbar/Admin";
import { Container, Section } from "./styles/layout";
import { Route, Routes } from "react-router-dom";
import Members from "./pages/Admin/Members";
import { useData } from "./context/data";
import { get } from "./services";
import Member from "./pages/Admin/Member";
import Attendance from "./pages/Admin/Attendance";
import AttendanceDetail from "./pages/Admin/AttendanceDetail";
import Profile from "./pages/Admin/Profile";
import Home from "./pages/Admin/Home";

function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const { setRegisters, setMembers, setIsGetting, setBackup, isGetting } = useData();

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
      <Section isLoading={isGetting}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/miembros" element={<Members />} />
          <Route path="/miembros/:id" element={<Member />} />
          <Route path="/asistencia" element={<Attendance />} />
          <Route path="/asistencia/:id" element={<AttendanceDetail />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </Section>
    </Container>
  );
}

export default Admin;
