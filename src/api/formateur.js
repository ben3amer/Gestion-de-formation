import api from "./api";

export const createFormateur = (body) => {
  return api.get("/formateurs", body);
};

export const getFormateurs = () => {
  return api.get("/formateurs");
};

export const getFormateurById = (id) => {
  return api.get(`/formateurs/${id}`);
};
export const getFormateurByNameLastname = (name, lastname) => {
  return api.get(`/formateurs/${name}/${lastname}`);
};

export const updateFormateur = (id, body) => {
  return api.get(`/formateurs/${id}`, body);
};

export const deleteFormateur = (id) => {
  return api.get(`/formateurs/${id}`);
};
