import api from "./api";

export const createSession = (body) => {
  return api.get("/sessions", body);
};

export const getSessions = (criteria = "") => {
  return api.get(`/sessions?criteria=${criteria}`);
};

export const getSessionById = (id) => {
  return api.get(`/sessions/${id}`);
};

export const updateSession = (id, body) => {
  return api.get(`/sessions/${id}`, body);
};

export const deleteSession = (id) => {
  return api.get(`/sessions/${id}`);
};
