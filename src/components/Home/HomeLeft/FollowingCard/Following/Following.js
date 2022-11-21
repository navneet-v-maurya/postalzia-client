import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserAction,
  unfollowUserAction,
} from "../../../../Redux/Actions/UserAction";
import "./Following.css";

import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Following({ u }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authReducer.authData);

  const [following, setFollowing] = useState(user.following.includes(u._id));

  const handleFollow = () => {
    if (!following) {
      dispatch(followUserAction(user._id, u));
    } else {
      dispatch(unfollowUserAction(user._id, u));
    }
    setFollowing((prev) => !prev);
  };

  const handleOpenProfile = () => {
    navigate(`/profile/${u._id}`);
  };

  return (
    <div className="following">
      <div onClick={handleOpenProfile}>
        {u.profilePic ? (
          <img src={u.profilePic} alt="profile-img" />
        ) : (
          <CgProfile className="default" />
        )}

        <div>
          <p>
            {u.firstName} {u.lastName}
          </p>
          <p>{u.userName}</p>
        </div>
      </div>
      <button
        onClick={handleFollow}
        className={following ? "unfollow" : "follow"}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default Following;
