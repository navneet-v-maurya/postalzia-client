import axios from "axios";

const URL = "https://postalzia-server.up.railway.app";

export const userChats = (userId) => axios.get(`${URL}/chat/${userId}`);

export const findChat = (id1, id2) =>
  axios.get(`${URL}/chat/find/${id1}/${id2}`);

export const createChat = (senderId, receiverId) =>
  axios.post(`${URL}/chat`, { senderId, receiverId });
