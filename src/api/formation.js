import api from "./api";

export const createFormation = (body) => {
  return api.get("/formations", body);
};

export const getFormations = () => {
  return api.get("/formations");
};

export const getFormationById = (id) => {
  return api.get(`/formations/${id}`);
};

export const getFormationByTitre = (titre) => {
    return api.get(`/formations/${titre}`);
  };
  
export const updateFormation = (id, body) => {
  return api.get(`/formations/${id}`, body);
};

export const deleteFormation = (id) => {
  return api.get(`/formations/${id}`);
};
