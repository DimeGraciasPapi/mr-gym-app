import { useAuth } from "../../context/auth";
import Admin from "./Admin";
import Client from "./Client";

function Navbar({ setModal }) {
  const { user } = useAuth();
  
  return (
    user?.user_type === "admin"
    ? <Admin />
    : <Client setModal={setModal} />
  );
}

export default Navbar;
