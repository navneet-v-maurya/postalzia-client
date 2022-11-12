import axios from "axios";

const URL = "http://localhost:5000";

export const getUser = (id) => axios.get(`${URL}/${id}`);
