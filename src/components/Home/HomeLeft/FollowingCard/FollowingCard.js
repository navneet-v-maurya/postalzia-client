import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../Api/UserApi";
import Following from "./Following/Following";
import "./FollowingCard.css";
import { useSelector } from "react-redux";

function FollowingCard() {
  const [Users, setUsers] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="following-card">
      <p>Who is Following you</p>
      <div>
        {Users.map((u) => {
          if (user._id !== u._id) {
            return <Following u={u} key={u._id} />;
          }
        })}
      </div>
    </div>
  );
}

export default FollowingCard;
