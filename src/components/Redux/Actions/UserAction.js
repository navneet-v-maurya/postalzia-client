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

export const followUserAction = (id, data) => async (dispatch) => {
  dispatch({ type: "FOLLOW", data: data._id });
  try {
    await UserApi.followUser(id, data);
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUserAction = (id, data) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW", data: data._id });
  try {
    await UserApi.unFollowUser(id, data);
  } catch (error) {
    console.log(error);
  }
};
