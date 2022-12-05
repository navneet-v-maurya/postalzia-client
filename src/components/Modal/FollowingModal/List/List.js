import React, { useEffect, useState } from "react";
import "./List.css";
import { getAllUsers } from "../../../Api/UserApi";
import Following from "../../../Home/HomeLeft/FollowingCard/Following/Following";
import Loading from "../../../Loading/Loading";
import { BsChatSquareDots } from "react-icons/bs";
import { setActiveChatAction } from "../../../Redux/Actions/ChatAction";
import { useDispatch, useSelector } from "react-redux";
import { createChat, findChat } from "../../../Api/ChatApi";

function List({ setModal, chats, setChats }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const activeChat = useSelector((state) => state.ChatReducer.activeChat);
  const dispatch = useDispatch();
  const [Users, setUsers] = useState(null);
  let [filteredUser, setFilteredUser] = useState(null);

  const values = [
    { id: 1, text: "All Users" },
    { id: 2, text: "Followers" },
    { id: 3, text: "Followings" },
  ];
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUsers();
      setUsers(data);
      setFilteredUser(data);
    };
    fetchUsers();
  }, []);

  const handleChat = async (u) => {
    const { data } = await findChat(user._id, u._id);
    if (data !== null) {
      if (activeChat === null || activeChat._id !== data._id) {
        dispatch(setActiveChatAction(data));
      }
    } else {
      const { data } = await createChat(user._id, u._id);
      setChats([...chats, data]);
      dispatch(setActiveChatAction(data));
    }
    setModal(false);
  };

  const filteringUsers = (valId) => {
    if (valId === 1) {
      setFilteredUser(Users);
    } else if (valId === 2) {
      const fol = Users.filter((u) => user.followers.includes(u._id));
      setFilteredUser(fol);
    } else {
      const fol = Users.filter((u) => user.following.includes(u._id));
      setFilteredUser(fol);
    }
  };

  return Users === null ? (
    <Loading loadinType="Fetching users...." auth={false} />
  ) : (
    <div className="list">
      <div>
        {values.map((val) => (
          <p
            className={activeId === val.id ? "active" : "inactive"}
            onClick={() => {
              setActiveId(val.id);
              filteringUsers(val.id);
            }}
          >
            {val.text}
          </p>
        ))}
      </div>
      <hr />
      <div>
        {filteredUser.length === 0
          ? "No users Found!!"
          : // eslint-disable-next-line
            filteredUser.map((u) => {
              if (user._id !== u._id) {
                return (
                  <div key={u._id}>
                    <Following u={u} />
                    <button onClick={() => handleChat(u)}>
                      <BsChatSquareDots />
                      chat
                    </button>
                  </div>
                );
              }
            })}
      </div>
    </div>
  );
}

export default List;
