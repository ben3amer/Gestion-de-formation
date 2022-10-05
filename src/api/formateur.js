import api from "./api";

export const createFormateur = (body) => {
  return api.get("/formateurs", body);
};

export const getFormateurs = (criteria = "") => {
  return api.get(`/formateurs?criteria=${criteria}`);
};

export const getFormateurById = (id) => {
  return api.get(`/formateurs/${id}`);
};

export const updateFormateur = (id, body) => {
  return api.get(`/formateurs/${id}`, body);
};

export const deleteFormateur = (id) => {
  return api.get(`/formateurs/${id}`);
};
