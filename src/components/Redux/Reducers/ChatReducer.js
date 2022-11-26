const ChatReducer = (
  state = {
    activeChat: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_ACTIVE_CHAT":
      return { activeChat: action.data };

    case "REMOVE_ACTIVE_CHAT":
      localStorage.clear();
      return { activeChat: action.data };
    default:
      return state;
  }
};

export default ChatReducer;
