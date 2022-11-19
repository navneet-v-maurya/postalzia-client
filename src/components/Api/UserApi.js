import axios from "axios";

const URL = "https://postalzia.herokuapp.com/user";
const API = axios.create({ baseURL: "https://postalzia.herokuapp.com/user" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getUser = (id) => API.get(`${URL}/${id}`);

export const updateUserApi = (id, data) => API.put(`${URL}/${id}`, data);

export const getAllUsers = () => API.get(`${URL}`);

export const followUser = (id, data) => API.put(`${URL}/${id}/follow`, data);

export const unFollowUser = (id, data) =>
  API.put(`${URL}/${id}/unfollow`, data);
