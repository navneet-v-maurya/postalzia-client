import axios from "axios";

const URL = "http://localhost:5000";

export const getMessages = (chatId) => axios.get(`${URL}/message/${chatId}`);
