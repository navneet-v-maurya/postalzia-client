import axios from "axios";

const URL = "http://localhost:5000";

export const uploadImageApi = (data) =>
  axios.post(`${URL}/uploadimagerouter`, data);

export const uploadPost = (data) => axios.post(`${URL}/post`, data);
