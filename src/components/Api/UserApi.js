import axios from "axios";

const URL = "https://postalzia-server.up.railway.app/user";
const API = axios.create({
  baseURL: "https://postalzia-server.up.railway.app/user",
});

export const getUser = (id) => API.get(`${URL}/${id}`);

export const updateUserApi = (id, data) => API.put(`${URL}/${id}`, data);

export const getAllUsers = () => API.get(`${URL}`);

export const followUser = (id, data) => API.put(`${URL}/${id}/follow`, data);

export const unFollowUser = (id, data) =>
  API.put(`${URL}/${id}/unfollow`, data);
