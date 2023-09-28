import { TOKEN_KEY } from "../config";
import apiFetch from "./apiFetch"

export const login = async (body) => {
  const { token, ...user } = await apiFetch("auth/signin", { body });

  localStorage.setItem(TOKEN_KEY, token);
  return user;
}

export const signup = async (body) => {
  const { token, ...user } = await apiFetch("auth/signup", { body });

  localStorage.setItem(TOKEN_KEY, token);
  return user;
}

export const logout = async () => {
  localStorage.removeItem(TOKEN_KEY);
}
