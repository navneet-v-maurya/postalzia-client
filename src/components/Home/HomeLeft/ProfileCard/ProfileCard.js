import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import defaultCover from "../../../../images/default-cover.png";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../../Api/UserApi";

function ProfileCard({ profile }) {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [myProfileUser, setMyProfileUser] = useState({});
  const posts = useSelector((state) => state.postReducer.posts);

  const dispatch = useDispatch();

  const params = useParams();

  const paramsId = params.id;

  const [following, setFollowing] = useState(user.following.includes(paramsId));

  const fetchUser = async () => {
    if (paramsId === undefined) {
      setMyProfileUser(user);
    } else {
      if (paramsId === user._id) {
        setMyProfileUser(user);
      } else {
        const { data } = await getUser([paramsId]);
        setMyProfileUser(data);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [paramsId, user]);

  return (
    <div className="profile-card">
      <div className="background-img">
        <img
          src={myProfileUser.coverPic ? myProfileUser.coverPic : defaultCover}
          alt="background"
        />
      </div>
      {myProfileUser.profilePic ? (
        <img src={myProfileUser.profilePic} alt="profile" />
      ) : (
        <CgProfile className="default-profile-pic" />
      )}
      <p>
        {myProfileUser.firstName} {myProfileUser.lastName}
      </p>
      <p>{myProfileUser.worksAt ? myProfileUser.worksAt : ""}</p>
      <hr />
      <div className="following-info">
        <div>
          <p>{myProfileUser._id ? myProfileUser.followers.length : ""}</p>
          <p>Followers</p>
        </div>
        <div></div>
        <div>
          <p>{myProfileUser._id ? myProfileUser.following.length : ""}</p>
          <p>Following</p>
        </div>
        {profile ? (
          <>
            <div></div>
            <div>
              <p>
                {
                  posts.filter((post) => {
                    if (post.userId === myProfileUser._id) {
                      return post;
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

      {profile ? (
        ""
      ) : (
        <Link className="myProfile" to={`/profile/${user._id}`}>
          My Profile
        </Link>
      )}
    </div>
  );
}

export default ProfileCard;
