import React from "react";
import Contact from "../Contact/Contact";
import FeatureService from "../FeatureService/FeatureService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MakeAnAppoinmnet from "../MakeAnAppoinment/MakeAnAppoinmnet";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeatureService></FeatureService>
      <MakeAnAppoinmnet></MakeAnAppoinmnet>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
