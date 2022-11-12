import React from "react";
import "./ProfileCard.css";
import background from "../../../../images/background.jpg";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function ProfileCard({ profile, setProfile }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  console.log(user);

  return (
    <div className="profile-card">
      <div className="background-img">
        <img
          src={user.coverPic ? user.coverPic : background}
          alt="background"
        />
      </div>
      {user.profilePic ? (
        <img src={user.profilePic} alt="profile" />
      ) : (
        <CgProfile className="default-profile-pic" />
      )}

      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.worksAt ? user.worksAt : "Write about youself!"}</p>
      <hr />
      <div className="following-info">
        <div>
          <p>{user.followers.length}</p>
          <p>Followers</p>
        </div>
        <div></div>
        <div>
          <p>{user.following.length}</p>
          <p>Following</p>
        </div>
        {profile ? (
          <>
            <div></div>
            <div>
              <p>{posts.filter((post) => post.userId === user._id).length}</p>
              <p>Posts</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <hr />
      {profile ? "" : <Link to={`/profile/${user._id}`}>My Profile</Link>}
    </div>
  );
}

export default ProfileCard;
