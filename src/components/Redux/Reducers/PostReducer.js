const postReducer = (
  state = {
    posts: [],
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        error: false,
        uploading: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, error: true, uploading: true };
    default:
      return state;
  }
};

export default postReducer;
