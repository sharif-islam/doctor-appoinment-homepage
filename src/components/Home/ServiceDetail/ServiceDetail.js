import React from "react";

const ServiceDetail = ({ info }) => {
  return (
    <div className="col-md-4 text-center">
      <img Style={{ height: "50px" }} src={info.img} alt="" />
      <h5 className="mt-3 mb-3">{info.name}</h5>
      <small className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        exercitationem itaque.
      </small>
    </div>
  );
};

export default ServiceDetail;
