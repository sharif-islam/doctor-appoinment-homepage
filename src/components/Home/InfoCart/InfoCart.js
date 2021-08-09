import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCart.css";
const InfoCart = ({ info }) => {
  return (
    <div className="col-md-4 text-white info-card">
      <div
        className={`d-flex info-container info-${info.background} justify-content-center`}
      >
        <div className="me-3">
          <FontAwesomeIcon
            className="info-icon"
            icon={info.icon}
          ></FontAwesomeIcon>
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
