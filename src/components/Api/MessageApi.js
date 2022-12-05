import axios from "axios";

const URL = "https://postalzia-server.up.railway.app";

export const getMessages = (chatId) => axios.get(`${URL}/message/${chatId}`);

export const addMessageApi = (data) => axios.post(`${URL}/message/`, data);
