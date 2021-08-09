import React from "react";
import first from "../../../images/001-dental.png";
import second from "../../../images/tooth (1).png";
import third from "../../../images/tooth.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Fluoride Treatment",
    img: first,
  },
  {
    name: "Cavity Feeling",
    img: second,
  },
  {
    name: "Teeth Whitening",
    img: third,
  },
];

const Services = () => {
  return (
    <div className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: " #1cc7c1" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3a4256" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {serviceData.map((info) => (
            <ServiceDetail info={info}></ServiceDetail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
