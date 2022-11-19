import axios from "axios";

const URL = "https://postalzia.herokuapp.com";

export const getTimeLinePosts = (id) => axios.get(`${URL}/post/${id}/timeline`);

export const likePost = (postId, userId) =>
  axios.put(`${URL}/post/${postId}/like`, { userId: userId });

export const deletePostApi = (id, userId) => {
  return axios.delete(`${URL}/post/${id}`, { data: { user: userId } });
};
