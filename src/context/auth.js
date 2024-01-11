import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../services";
import * as session from "../services/sessions";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      try {
        const user = await get("users/info/profile");
        setUser(user);

        setIsLoading(false);
      }catch(e) {
        console.error(e);

        setIsLoading(false);
      }
    }

    fetch();
  }, []);
  
  const login = async (credentials) => {
    try {
      const response = await session.login(credentials);
      setUser(response);

      if(response.user_type === "admin") {
        navigate("/")
      } else if(location.pathname === "/") {
        navigate("/mr-gym-go");
      }
      
      return response;
    }catch(e) {
      console.error(e);

      setError(e.message);
    }
  }

  const signup = async (data) => {
    try {
      const response = await session.signup(data);
      setUser(response);

      if(location.pathname === "/") navigate("/planes");

      return response;
    }catch(e) {
      console.error(e);

      setError(e.message);
    }
  }

  const logout = async () => {
    await session.logout();
    
    setUser(null);
    navigate("/");
    setError(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        login,
        signup,
        logout
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
