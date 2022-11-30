import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { FiEdit2 } from "react-icons/fi";
import ProfileModal from "../../../Modal/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Api/UserApi";
import { Link, useParams } from "react-router-dom";
import { logoutAction } from "../../../Redux/Actions/AuthAction";
import { Set_Default } from "../../../Redux/Actions/PostAction";
import { removeActiveChatAction } from "../../../Redux/Actions/ChatAction";
import { removeMessagesAction } from "../../../Redux/Actions/MessageAction";

function InfoCard() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [myProfileUser, setMyProfileUser] = useState({});
  const params = useParams();
  const userParamsId = params.id;
  const { user } = useSelector((state) => state.authReducer.authData);

  const fetchUser = async () => {
    if (userParamsId === user._id) {
      setMyProfileUser(user);
    } else {
      const { data } = await getUser(userParamsId);
      setMyProfileUser(data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userParamsId, user]);

  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(Set_Default());
    dispatch(removeActiveChatAction());
    dispatch(removeMessagesAction());
  };

  return (
    <div className="info-card">
      <div>
        <p>
          {user._id === myProfileUser._id
            ? "Your Info"
            : `${myProfileUser.firstName}'s Info`}
        </p>
        {user._id === myProfileUser._id ? (
          <>
            <FiEdit2 onClick={() => setModal(true)} />
            <ProfileModal modal={modal} setModal={setModal} user={user} />
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
            {myProfileUser.livesIn ? (
              <>
                {myProfileUser.livesIn}, {myProfileUser.country}
              </>
            ) : (
              "Add your location!!"
            )}
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
      {userParamsId === user._id ? (
        <Link className="logout-button" onClick={handleLogout} to="../auth">
          Logout
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default InfoCard;
