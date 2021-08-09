import React from "react";
import InfoCart from "../InfoCart/InfoCart";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const infosData = [
  {
    title: "Opening Hours",
    description: "we are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Booklyn NY 10000 USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us Now",
    description: "+55465445768",
    icon: faPhone,
    background: "primary",
  },
];
const BusnessInfo = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row w-75">
        {infosData.map((info) => (
          <InfoCart info={info}></InfoCart>
        ))}
      </div>
    </div>
  );
};

export default BusnessInfo;
