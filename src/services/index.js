import apiFetch from "./apiFetch"

export const get = async (endpoint, id) => {
  return await apiFetch(id ? `${endpoint}/${id}` : endpoint);
}

export const post = async (endpoint, body) => {
  return await apiFetch(endpoint, { body });
}

export const update = async (endpoint, body, id) => {
  return await apiFetch(
    `${endpoint}/${id}`,
    { body, method: "PATCH" }
  );
}

export const destroy = async (endpoint, id) => {
  return await apiFetch(`${endpoint}/${id}`, { method: "DELETE" });
}
