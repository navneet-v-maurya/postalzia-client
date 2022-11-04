import React from "react";
import "./InfoCard.css";
import { FiEdit2 } from "react-icons/fi";

function InfoCard() {
  return (
    <div className="info-card">
      <div>
        <p>Your Info</p>
        <FiEdit2 />
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
