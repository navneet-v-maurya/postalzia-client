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
      return { ...state, error: true, uploading: false };
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, loading: false, error: false, posts: action.data };
    case "RETREIVING_FAIL":
      return { ...state, error: true, loading: false };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.postId),
      };
    case "SET_DEFAULT":
      localStorage.clear();
      return { ...state, posts: [] };
    default:
      return state;
  }
};

export default postReducer;
