import { useState } from "react";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/auth";
import { Route, Routes } from "react-router-dom";
import SessionModal from "./components/SessionModal";
import Home from "./pages/Client/Home/home";
import Footer from "./components/Footer";

function App() {
  const { user, isLoading } = useAuth();
  const [modal, setModal] = useState({ action: "login", isOpen: false });

  return (
    isLoading
    ? "Cargando..."
    : 
      <>
        <Navbar 
          setModal={setModal}
        />
        {
          <Routes>
            {
              user && user.user_type === "client"
              ? ""
              : <Route index path="/" element={<Home setModal={setModal} />} />
            }
            <Route path="/planes" element={<h1>Planes page</h1>} />
            <Route path="/ubicanos" element={<h1>Ubicanos page</h1>} />
            <Route path="*" element={<h1>Pagina no encontrada</h1>} />
            {
              user
              &&  <>
                    <Route path="/perfil" element={<h1>Profile page</h1>}/>
                    <Route path="/client-logged" element={<h1>pagina solo para cliente loggeado</h1>} />
                  </> 
            }
          </Routes>
        }
        <SessionModal 
          modal={modal}
          setModal={setModal}
        />
        <Footer />
      </>
  );
}

export default App;
