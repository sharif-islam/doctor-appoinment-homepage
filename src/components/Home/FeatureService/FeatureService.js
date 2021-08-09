import React from "react";
import photo from "../../../images/check.png";
import "./FeatureService.css";
const FeatureService = () => {
  return (
    <div className="d-flex justify-content-center pt-5 mt-5 mb-5 pb-5">
      <div className="row w-75 featureContainer">
        <div className="col-md-5">
          <img className="img-fluid" src={photo} alt="" />
        </div>
        <div className="col-md-7">
          <h1 className="mt-3">
            Expectation Dental <br />
            Care, on Your Terms
          </h1>
          <small className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime
            magnam consectetur iure adipisci nemo quae eius culpa ratione fuga
            quos excepturi quas, harum corporis quam nulla voluptatem omnis
            recusandae soluta quidem. Necessitatibus corporis voluptates enim
            accusantium at explicabo maxime recusandae. Quam, praesentium iure!
            Quasi aut commodi nam officiis cumque.Necessitatibus corporis
            voluptates enim accusantium at explicabo maxime recusandae. Quam,
            praesentium iure! Quasi aut commodi nam officiis cumque! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Laborum, ea! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
            molestias?
          </small>
          <br />
          <br />
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureService;
