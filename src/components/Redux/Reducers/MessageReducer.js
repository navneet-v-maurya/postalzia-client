const messageReducer = (
  state = {
    messages: [],
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_MESSAGE_START":
      return { ...state, loading: true, error: false };
    case "FETCH_MESSAGE_SUCCESS":
      return { ...state, loading: false, error: false, messages: action.data };
    case "FETCH_MESSAGE_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default messageReducer;
