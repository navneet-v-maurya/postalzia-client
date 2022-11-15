import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserAction,
  unfollowUserAction,
} from "../../../../Redux/Actions/UserAction";
import "./Following.css";

function Following({ user }) {
  const dispatch = useDispatch();

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

  return (
    <div className="following">
      <div>
        <img src={user.profilePic} alt="profile-img" />
        <div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.userName}</p>
        </div>
      </div>
      <button onClick={handleFollow}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default Following;
