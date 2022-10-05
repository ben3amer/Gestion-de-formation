import api from "./api";

export const createParticipant = (body) => {
  return api.get("/participants", body);
};

export const getParticipants = (criteria = "") => {
  return api.get(`/participants?criteria=${criteria}`);
};

export const getParticipantById = (id) => {
  return api.get(`/participants/${id}`);
};

export const updateParticipant = (id, body) => {
  return api.get(`/participants/${id}`, body);
};

export const deleteParticipant = (id) => {
  return api.get(`/participants/${id}`);
};
