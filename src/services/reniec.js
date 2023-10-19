import { BASE_URI_RENIEC, TOKEN_RENIEC } from "../config";

export const getInfo = async (dni) => {
  const response = await fetch(`${BASE_URI_RENIEC}/dni/${dni}?api_token=${TOKEN_RENIEC}`);

  return await response.json();
}
