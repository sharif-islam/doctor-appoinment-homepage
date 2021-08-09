import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main>
      <div style={{ height: "600px" }} className="row d-flex mt-5 pt-5">
        <div className="col-md-3 offset-md-1">
          <h1 style={{ color: "#3A4256" }}>Appointment</h1>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
