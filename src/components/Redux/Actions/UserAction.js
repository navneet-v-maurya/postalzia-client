import * as UserApi from "../../Api/UserApi";

export const UpdateUserAction = (id, userData) => async (dispatch) => {
  dispatch({ type: "UPDATE_START" });
  try {
    const { data } = await UserApi.updateUserApi(id, userData);
    dispatch({ type: "UPDATE_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_FAIL" });
  }
};
