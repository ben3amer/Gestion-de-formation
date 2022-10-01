import api from "./api";

export const createSession = (body) => {
  return api.get("/sessions", body);
};

export const getSessions = () => {
  return api.get("/sessions");
};

export const getSessionById = (id) => {
  return api.get(`/sessions/${id}`);
};

export const getSessionByFormateurId = (idFormateur) => {
    return api.get(`/sessions/${idFormateur}`);
};

export const getSessionByFormationId = (idFormation) => {
    return api.get(`/sessions/${idFormation}`);
};

export const updateSession = (id, body) => {
  return api.get(`/sessions/${id}`, body);
};

export const deleteSession = (id) => {
  return api.get(`/sessions/${id}`);
};
