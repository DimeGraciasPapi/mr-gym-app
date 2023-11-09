import Navbar from "./components/Navbar";
import { useAuth } from "./context/auth";
import { Route, Routes } from "react-router-dom";
import SessionModal from "./components/SessionModal";
import Footer from "./components/Footer";
import PlansPage from "./pages/Client/Plans";
import Home from "./pages/Client/Home";
import Ubication from "./pages/Client/Ubication";
import MrGymGo from "./pages/Client/MrGymGo";
import MainGymPage from "./components/GymPage/main";
import generateRoutes from "./helpers/generateRoutes";

function App() {
  const { user, isLoading } = useAuth();

  return (
    isLoading
    ? "Cargando..."
    : 
      <>
        <Navbar />
        {
          <Routes>
            {
              user && user.user_type === "client"
              ? ""
              : <Route index path="/" element={<Home />}/>
            }
            <Route path="/planes" element={<PlansPage />} />
            <Route path="/ubicanos" element={<Ubication />} />
            <Route path="/mr-gym-go" element={<MrGymGo />} />
            <Route path="/mr-gym-go/cardio-ritmo" element={<MainGymPage search="cardio" />} />
            <Route path="/mr-gym-go/cuerpo-mente" element={<MainGymPage search="cuerpo" />} />
            <Route path="/mr-gym-go/fuerza-resistencia" element={<MainGymPage search="fuerza" />} />
            { generateRoutes("cardio") }
            { generateRoutes("fuerza") }
            { generateRoutes("cuerpo") }
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
        <SessionModal />
        <Footer />
      </>
  );
}

export default App;
