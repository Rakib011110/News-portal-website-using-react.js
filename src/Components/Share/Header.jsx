import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p className="text-secondary">
        {" "}
        <small> Journalism Without Fear or Favour</small>
      </p>
      <p>{moment().format()} </p>
    </div>
  );
};

export default Header;
