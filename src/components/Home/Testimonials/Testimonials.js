import React from "react";
import harry from "../../../images/Ellipse 1.png";
import ema from "../../../images/Ellipse 2.png";
import watson from "../../../images/Ellipse 3.png";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";
import "./Testimonials.css";
const testimonials = [
  {
    name: "Harry",
    img: harry,
    location: "Bangladesh",
  },
  {
    name: "Ema",
    img: ema,
    location: "Germany",
  },
  {
    name: "Watson",
    img: watson,
    location: "Canada",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div>
          <h5 className="text-primary">TESTIMONIAL</h5>
          <h2>
            What's Our Patients <br />
            Says
          </h2>
        </div>
        <div className="card-deck mt-5 row">
          {testimonials.map((person) => (
            <TestimonialDetail person={person}></TestimonialDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
