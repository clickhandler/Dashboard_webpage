import React from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <h5>Dashboard</h5>
        </div>
        <div className="menu_icons">
          <div>
            <i className="fi fi-rs-search"></i>
          </div>
          <div>
            {" "}
            <img src={require("../asset/Images/united-states.png")} alt="" />
          </div>
          <div>
            <i className="fi fi-rr-apps"></i>
          </div>
          <div>
          <i className="fi fi-rr-bell"></i>
          </div>
          <div>
            <i className="fi fi-rs-settings"></i>
          </div>
          <div>
            <img className="User_Image" src={require("../asset/Images/sumit-square-profile.webp")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
