import axios from "axios";

const URL = "https://postalzia.herokuapp.com";

export const uploadImageApi = (data) =>
  axios.post(`${URL}/uploadimagerouter`, data);

export const uploadPost = (data) => axios.post(`${URL}/post`, data);
