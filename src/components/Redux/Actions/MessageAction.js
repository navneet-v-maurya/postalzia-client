import * as messageApi from "../../Api/MessageApi";

export const getMessagesAction = (chatId) => async (dispatch) => {
  dispatch({ type: "FETCH_MESSAGE_START" });
  try {
    const { data } = await messageApi.getMessages(chatId);
    dispatch({ type: "FETCH_MESSAGE_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_MESSAGE_FAIL" });
  }
};

export const removeMessagesAction = () => async (dispatch) => {
  dispatch({ type: "REMOVE_MESSAGES" });
};
