import api from "./api";

export const createUser = (body) => {
  return api.get("/users", body);
};

export const getUsers = (criteria = "") => {
  return api.get(`/users?criteria=${criteria}`);
};

export const getUserById = (id) => {
  return api.get(`/users/${id}`);
};

export const updateUser = (id, body) => {
  return api.get(`/users/${id}`, body);
};

export const deleteUser = (id) => {
  return api.get(`/users/${id}`);
};
