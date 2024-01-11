import Admin from "./Admin";
import Client from "./Client";
import Loader from "./components/Loader";
import { useAuth } from "./context/auth";

function App() {
  const { user, isLoading } = useAuth();
  
  return (
    isLoading
    ? <Loader />
    : (user?.user_type === "admin" ? <Admin /> : <Client />)
  )
}

export default App;
