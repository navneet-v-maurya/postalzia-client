const authReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "UPDATE_START":
      return { ...state, loading: true, error: false };
    case "UPDATE_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "UPDATE_FAIL":
      return { ...state, loading: false, error: true };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, loading: false, error: false, authData: null };
    default:
      return state;
  }
};

export default authReducer;
