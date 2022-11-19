import * as PostApi from "../../Api/PostApi";
//get timeline posts
export const getTimeLinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getTimeLinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const Set_Default = () => async (dispatch) => {
  dispatch({ type: "SET_DEFAULT" });
};

export const deltePostAction = (postId, userId) => async (dispatch) => {
  dispatch({ type: "DELETE_POST", postId: postId });
  try {
    await PostApi.deletePostApi(postId, userId);
  } catch (error) {
    console.log(error);
  }
};
