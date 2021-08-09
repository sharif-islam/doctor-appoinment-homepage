import React from "react";
import BusnessInfo from "../BusnessInfo/BusnessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <BusnessInfo></BusnessInfo>
    </div>
  );
};

export default Header;
