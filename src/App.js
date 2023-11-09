import Navbar from "./components/Navbar";
import { useAuth } from "./context/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import SessionModal from "./components/SessionModal";
import Footer from "./components/Footer";
import PlansPage from "./pages/Client/Plans";
import Home from "./pages/Client/Home";
import Ubication from "./pages/Client/Ubication";
import MrGymGo from "./pages/Client/MrGymGo";
import MainGymPage from "./components/GymPage/main";
import generateRoutes from "./helpers/generateRoutes";
import Profile from "./pages/Client/Profile";

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
            <Route index path="/" element={user ? <Navigate to="/mr-gym-go" /> : <Home />}/>
            <Route path="/planes" element={<PlansPage />} />
            <Route path="/ubicanos" element={<Ubication />} />
            <Route path="/mr-gym-go" element={<MrGymGo />} />
            <Route path="/mr-gym-go/cardio-ritmo" element={<MainGymPage search="cardio" />} />
            <Route path="/mr-gym-go/cuerpo-mente" element={<MainGymPage search="cuerpo" />} />
            <Route path="/mr-gym-go/fuerza-resistencia" element={<MainGymPage search="fuerza" />} />
            { generateRoutes("cardio") }
            { generateRoutes("fuerza") }
            { generateRoutes("cuerpo") }
            {
              user
              &&  <>
                    <Route path="/perfil" element={<Profile />}/>
                  </> 
            }
            <Route path="*" element={<h1>Pagina no encontrada</h1>} />
          </Routes>
        }
        <SessionModal />
        <Footer />
      </>
  );
}

export default App;
