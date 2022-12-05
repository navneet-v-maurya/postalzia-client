import axios from "axios";

const URL = "https://postalzia-server.up.railway.app";

export const uploadImageApi = (data) =>
  axios.post(`${URL}/uploadimagerouter`, data);

export const uploadPost = (data) => axios.post(`${URL}/post`, data);
