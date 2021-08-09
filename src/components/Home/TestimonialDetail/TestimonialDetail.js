import React from "react";
import "./TestimonialDetail.css";

const TestimonialDetail = ({ person }) => {
  return (
    <div className="col-md-4 test-container">
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odit ipsum magnam molestias aut quibusdam explicabo,
          numquam id deleniti quaerat voluptas omnis corrupti placeat nisi
          ducimus reiciendis, dolor provident
        </p>
        <div className="d-flex">
          <div>
            <img
              style={{
                height: "50px",
                marginTop: "120px",
                marginRight: "20px",
              }}
              src={person.img}
              alt=""
            />
          </div>
          <div>
            <p className="mb-0 text-primary">{person.name}</p>
            <p>{person.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;
