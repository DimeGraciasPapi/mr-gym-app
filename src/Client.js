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
import ChoosePlan from "./pages/Client/ChoosePlan";
import Success from "./pages/Client/ChoosePlan/Response/success";
import Failure from "./pages/Client/ChoosePlan/Response/failure";

function Client() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      {
        <Routes>
          <Route index path="/" element={user && user.user_type === "client" ? <Navigate to="/mr-gym-go" /> : <Home />} />
          <Route path="/planes" element={!user || !user.plan[0] ? <PlansPage /> : <Navigate to="/mr-gym-go" />} />
          <Route path="/ubicanos" element={<Ubication />} />
          <Route path="/mr-gym-go" element={<MrGymGo />} />
          <Route path="/mr-gym-go/cardio-ritmo" element={<MainGymPage search="cardio" />} />
          <Route path="/mr-gym-go/cuerpo-mente" element={<MainGymPage search="cuerpo" />} />
          <Route path="/mr-gym-go/fuerza-resistencia" element={<MainGymPage search="fuerza" />} />
          {
            user && !user.plan[0]
            && <>
                <Route path="/choose-plan" element={<ChoosePlan />} />
                <Route path="/choose-plan/failure" element={<Failure />} />
              </>
          }
          <Route path="/choose-plan/success" element={<Success />} />
          { generateRoutes("cardio") }
          { generateRoutes("fuerza") }
          { generateRoutes("cuerpo") }
          {
            user &&
            <>
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

export default Client;
