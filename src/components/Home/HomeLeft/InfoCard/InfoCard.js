import React, { useState } from "react";
import "./InfoCard.css";
import { FiEdit2 } from "react-icons/fi";
import ProfileModal from "../../../Modal/ProfileModal/ProfileModal";

function InfoCard() {
  const [modal, setModal] = useState(false);
  return (
    <div className="info-card">
      <div>
        <p>Your Info</p>
        <FiEdit2 onClick={() => setModal(true)} />
        <ProfileModal modal={modal} setModal={setModal} />
      </div>
      <div className="info">
        <div>
          Status <p> Married</p>
        </div>
        <div>
          Lives in <p> Japan</p>
        </div>
        <div>
          Works at <p> Google</p>
        </div>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default InfoCard;
