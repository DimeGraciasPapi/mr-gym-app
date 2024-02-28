import { useState } from "react";
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
import Chatbot from "react-chatbot-kit";
import config from "./components/chatbot/config";
import ActionProvider from "./components/chatbot/ActionProvider";
import MessageParser from "./components/chatbot/MessageParser";
import "./components/chatbot/bot.css";
import "react-chatbot-kit/build/main.css";
import { FaSnapchatGhost } from "react-icons/fa";

function Client() {
  const [showChatBot, setShowChatBot] = useState(false);
  const { user } = useAuth();

  const toggleChatBot = () => setShowChatBot(!showChatBot);

  return (
    <>
      <Navbar />
      {
        <Routes>
          <Route
            index
            path="/"
            element={
              user && user.user_type === "client" ? (
                <Navigate to="/mr-gym-go" />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="/planes"
            element={
              !user || !user.plan[0] ? (
                <PlansPage />
              ) : (
                <Navigate to="/mr-gym-go" />
              )
            }
          />
          <Route path="/ubicanos" element={<Ubication />} />
          <Route path="/mr-gym-go" element={<MrGymGo />} />
          <Route
            path="/mr-gym-go/cardio-ritmo"
            element={<MainGymPage search="cardio" />}
          />
          <Route
            path="/mr-gym-go/cuerpo-mente"
            element={<MainGymPage search="cuerpo" />}
          />
          <Route
            path="/mr-gym-go/fuerza-resistencia"
            element={<MainGymPage search="fuerza" />}
          />
          {user && !user.plan[0] && (
            <>
              <Route path="/choose-plan" element={<ChoosePlan />} />
              <Route path="/choose-plan/failure" element={<Failure />} />
            </>
          )}
          <Route path="/choose-plan/success" element={<Success />} />
          {generateRoutes("cardio")}
          {generateRoutes("fuerza")}
          {generateRoutes("cuerpo")}
          {user && (
            <>
              <Route path="/perfil" element={<Profile />} />
            </>
          )}
          <Route path="*" element={<h1>Pagina no encontrada</h1>} />
        </Routes>
      }
      <SessionModal />
      <Footer />
      <div className="button">
        <button onClick={toggleChatBot}>
          <FaSnapchatGhost size={20} />
        </button>
        {showChatBot && (
          <div className="BotChat">
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        )}
      </div>
      <div className='buttonWhatssap'>
        <a href='https://wa.link/zugsbz' >
         <img className='whatsapp' src='https://www.semana.com/resizer/SffiNLB5Y6ldffMtqUwEEvn0TLQ=/1280x1280/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/RVOLOBEE6ZG7ZPFZCKAH7M262Q.jpg' alt="Logo de WhatsApp"></img>
        </a>
      </div>
    </>
  );
}

export default Client;
