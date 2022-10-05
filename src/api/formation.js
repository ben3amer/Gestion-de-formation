import api from "./api";

export const createFormation = (body) => {
  return api.get("/formations", body);
};

export const getFormations = (criteria = "") => {
  return api.get(`/formations?criteria=${criteria}`);
};

export const getFormationById = (id) => {
  return api.get(`/formations/${id}`);
};

export const updateFormation = (id, body) => {
  return api.get(`/formations/${id}`, body);
};

export const deleteFormation = (id) => {
  return api.get(`/formations/${id}`);
};
