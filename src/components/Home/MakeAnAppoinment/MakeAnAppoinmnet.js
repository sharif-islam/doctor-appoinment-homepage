import React from "react";
import "./MakeAnAppoinment.css";
import doctor from "../../../images/doctor.png";

const MakeAnAppoinmnet = () => {
  return (
    <section className="make-container mb-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid" src={doctor} alt="" />
          </div>
          <div className="col-md-7 mt-5 text-white">
            <h5>APPOINTMENT</h5>
            <h2>
              Make An Appointment <br /> Today
            </h2>
            <small className="text-secondary text-white">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              dolorum, repudiandae iste similique aliquam animi. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vero voluptas sit,
              expedita ad velit sequi eligendi similique alias laborum
              molestias. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Saepe, neque.
            </small>
            <br />
            <br />
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAnAppoinmnet;
