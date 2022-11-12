import axios from "axios";

const URL = "http://localhost:5000";

export const getTimeLinePosts = (id) => axios.get(`${URL}/post/${id}/timeline`);

export const likePost = (postId, userId) =>
  axios.put(`${URL}/post/${postId}/like`, { userId: userId });
