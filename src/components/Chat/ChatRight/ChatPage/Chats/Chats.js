import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from "../../../../Redux/Actions/MessageAction";
import "./Chats.css";
import moment from "moment";

function Chats() {
  const [message, setMessage] = useState([]);
  const activeChat = useSelector((state) => state.ChatReducer.activeChat);
  const { user } = useSelector((state) => state.authReducer.authData);
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const getMessages = async () => {
    dispatch(getMessagesAction(activeChat._id));
  };

  useEffect(() => {
    getMessages();
    setMessage(messages);
  }, [activeChat]);
  return (
    <div className="chats">
      {message.map((m) => {
        return (
          <div
            className={m.senderId === user._id ? "myChat" : "userChat"}
            key={m._id}
            style={
              m.senderId === user._id
                ? { alignSelf: "flex-end" }
                : { alignSelf: "flex-start" }
            }
          >
            {m.text}
            <p>{moment(m.createdAt).fromNow()}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Chats;
