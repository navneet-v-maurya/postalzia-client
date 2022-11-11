import * as UploadApi from "../../Api/UploadApi";

export const uploadPost = (newPost) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const { data } = await UploadApi.uploadPost(newPost);
    dispatch({ type: "UPLOAD_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
