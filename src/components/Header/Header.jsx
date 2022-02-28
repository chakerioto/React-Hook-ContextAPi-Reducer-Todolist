import React from "react";
import avatar from "../../assests/avatar.png";

const Header = () => {
  return (
    <div className="header">
      <p className="title">My work</p>
      <img src={avatar} alt="" />
    </div>
  );
};

export default Header;
