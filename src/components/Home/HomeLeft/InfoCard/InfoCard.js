import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { FiEdit2 } from "react-icons/fi";
import ProfileModal from "../../../Modal/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Api/UserApi";
import { useParams } from "react-router-dom";
import { logoutAction } from "../../../Redux/Actions/AuthAction";

function InfoCard() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [myProfileUser, setMyProfileUser] = useState({});
  const params = useParams();
  const userParamsId = params.id;
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchUser = async () => {
      if (userParamsId === user._id) {
        setMyProfileUser(user);
      } else {
        const otherUser = await getUser(userParamsId);
        setMyProfileUser(otherUser);
      }
    };
    fetchUser();
  }, [myProfileUser]);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="info-card">
      <div>
        <p>Profile Info</p>
        {user._id === myProfileUser._id ? (
          <>
            <FiEdit2 onClick={() => setModal(true)} />
            <ProfileModal modal={modal} setModal={setModal} />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <div>
          Status
          <p>
            {myProfileUser.relationshipStatus
              ? myProfileUser.relationshipStatus
              : "Add Relationship Status!!"}
          </p>
        </div>
        <div>
          Lives in{" "}
          <p>
            {myProfileUser.livesIn
              ? myProfileUser.livesIn
              : "Add your location!!"}
          </p>
        </div>
        <div>
          Works at
          <p>
            {myProfileUser.worksAt
              ? myProfileUser.worksAt
              : "Add your Comapny name!!"}
          </p>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default InfoCard;
