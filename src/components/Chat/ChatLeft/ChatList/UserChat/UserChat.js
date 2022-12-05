import React, { useEffect, useState } from "react";
import "./UserChat.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../Api/UserApi";
import { CgProfile } from "react-icons/cg";
import { setActiveChatAction } from "../../../../Redux/Actions/ChatAction";

function UserChat({ chat, onlineUsers }) {
  const [chatUser, setChatUser] = useState({});
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  const getChatUser = async () => {
    if (chat !== undefined) {
      let cUser = chat.members.filter((userId) => userId !== user._id);
      const { data } = await getUser(cUser);
      setChatUser(data);
    }
  };

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  useEffect(() => {
    getChatUser();
    // eslint-disable-next-line
  }, [chat]);

  const setActiveChat = () => {
    dispatch(setActiveChatAction(chat));
  };

  return (
    <div onClick={setActiveChat} className="user-chat">
      {chatUser.profilePic ? (
        <img src={chatUser.profilePic} alt="profileimg" />
      ) : (
        <CgProfile />
      )}

      <div>
        <p>
          {chatUser.firstName} {chatUser.lastName}
        </p>
        <p> {checkOnlineStatus(chat) ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}

export default UserChat;
