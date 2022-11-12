import * as AuthApi from "../../Api/AuthApi";

export const logInAction = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "AUTH_START",
    });
    const { data } = await AuthApi.logInApi(userData);
    dispatch({
      type: "AUTH_SUCCESS",
      data: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "AUTH_FIAL",
    });
  }
};

export const signUpAction = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "AUTH_START",
    });
    const { data } = await AuthApi.signUpApi(userData);
    dispatch({
      type: "AUTH_SUCCESS",
      data: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "AUTH_FIAL",
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};
