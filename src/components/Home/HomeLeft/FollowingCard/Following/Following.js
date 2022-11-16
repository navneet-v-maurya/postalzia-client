import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserAction,
  unfollowUserAction,
} from "../../../../Redux/Actions/UserAction";
import "./Following.css";

import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Following({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user: currentUser } = useSelector(
    (state) => state.authReducer.authData
  );

  const [following, setFollowing] = useState(
    currentUser.following.includes(user._id)
  );

  const handleFollow = () => {
    if (!following) {
      dispatch(followUserAction(currentUser._id, user));
    } else {
      dispatch(unfollowUserAction(currentUser._id, user));
    }
    setFollowing((prev) => !prev);
  };

  const handleOpenProfile = () => {
    navigate(`/profile/${user._id}`);
  };

  return (
    <div className="following">
      <div onClick={handleOpenProfile}>
        {user.profilePic ? (
          <img src={user.profilePic} alt="profile-img" />
        ) : (
          <CgProfile className="default" />
        )}

        <div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.userName}</p>
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
