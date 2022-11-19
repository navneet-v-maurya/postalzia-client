import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import defaultCover from "../../../../images/default-cover.png";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../../Api/UserApi";

function ProfileCard({ profile, setProfile }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [myProfileUser, setMyProfileUser] = useState({});
  const posts = useSelector((state) => state.postReducer.posts);

  const params = useParams();

  const paramsId = params.id;

  const fetchUser = async () => {
    if (paramsId) {
      if (paramsId !== user._id) {
        const { data } = await getUser(paramsId);
        setMyProfileUser(data);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [params]);

  return (
    <div className="profile-card">
      <div className="background-img">
        <img
          src={
            myProfileUser._id
              ? myProfileUser.coverPic
                ? myProfileUser.coverPic
                : defaultCover
              : user.coverPic
              ? user.coverPic
              : defaultCover
          }
          alt="background"
        />
      </div>
      {!myProfileUser._id ? (
        user.profilePic ? (
          <img src={user.profilePic} alt="profile" />
        ) : (
          <CgProfile className="default-profile-pic" />
        )
      ) : myProfileUser.profilePic ? (
        <img src={myProfileUser.profilePic} alt="profile" />
      ) : (
        <CgProfile className="default-profile-pic" />
      )}

      <p>
        {myProfileUser._id ? myProfileUser.firstName : user.firstName}{" "}
        {myProfileUser._id ? myProfileUser.lastName : user.lastName}
      </p>
      <p>
        {myProfileUser._id
          ? myProfileUser.worksAt
            ? myProfileUser.worksAt
            : myProfileUser === user._id
            ? "write about yourSelf"
            : ""
          : user.worksAt
          ? user.worksAt
          : "Write about yourself!!"}
      </p>
      <hr />
      <div className="following-info">
        <div>
          <p>
            {myProfileUser._id
              ? myProfileUser.followers.length
              : user.followers.length}
          </p>
          <p>Followers</p>
        </div>
        <div></div>
        <div>
          <p>
            {myProfileUser._id
              ? myProfileUser.following.length
              : user.following.length}
          </p>
          <p>Following</p>
        </div>
        {profile ? (
          <>
            <div></div>
            <div>
              <p>
                {
                  posts.filter((post) => {
                    if (myProfileUser._id) {
                      if (post.userId === myProfileUser._id) {
                        return post;
                      }
                    } else {
                      if (post.userId === user._id) {
                        return post;
                      }
                    }
                  }).length
                }
              </p>
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
