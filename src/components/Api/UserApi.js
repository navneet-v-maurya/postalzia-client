import axios from "axios";

const URL = "http://localhost:5000/user";

export const getUser = (id) => axios.get(`${URL}/${id}`);

export const updateUserApi = (id, data) => axios.put(`${URL}/${id}`, data);

export const getAllUsers = () => axios.get(`${URL}`);
