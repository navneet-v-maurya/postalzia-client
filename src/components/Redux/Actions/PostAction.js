import * as PostApi from "../../Api/PostApi";

export const getTimeLinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getTimeLinePosts(id);
    dispatch({ type: "RETREIVING_START", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};
