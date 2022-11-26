import axios from "axios";

const URL = "http://localhost:5000";

export const userChats = (userId) => axios.get(`${URL}/chat/${userId}`);
