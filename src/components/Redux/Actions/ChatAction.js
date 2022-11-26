export const setActiveChatAction = (chat) => (dispatch) => {
  dispatch({ type: "SET_ACTIVE_CHAT", data: chat });
};

export const removeActiveChatAction = () => (dispatch) => {
  dispatch({ type: "REMOVE_ACTIVE_CHAT", data: null });
};
