import axios from "axios";

const URL = "http://localhost:5000";

export const getTimeLinePosts = (id) => axios.get(`${URL}/post/${id}/timeline`);
