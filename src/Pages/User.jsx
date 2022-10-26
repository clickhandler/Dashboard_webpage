import React from "react";
import "../Styles/User.css";

const User = () => {
  return (
    <>
      <div className="User_Profile">
        <div className="Image_container">
          <img
            className="background"
            src={require("../asset/Images/background.jpeg")}
            alt=""
          />
          <div className="User_Image">
            <img
              src={require("../asset/Images/sumit-square-profile.webp")}
              alt=""
            />
          </div>
          <div className="details">
            <h3>Sumit</h3>
            <p>Product Designer</p>
            <div
              style={{
                display: "flex",
             
                margin: "auto",
                gap: "40px",
              }}
            >
              <div>
                <h3>1,269</h3>
                <p>Products</p>
              </div>
              <div>
                <h3>5.2K</h3>
                <p>followers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Stats_container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <div>
              <p>Earnings</p>
            </div>
            <div>
              <i class="fi fi-rr-info"></i>
            </div>
          </div>
          <div className="stat_image">
            <img
              src={require("../asset/Images/depositphotos_445290080-stock-illustration-percent-pie-chart-circle-diagram.jpeg")}
              alt=""
            />
          </div>
          <div>
            <h3>$26,256</h3>
            <p>Earning this Month</p>
            <p>
              {" "}
              <span style={{ color: "green" }}>+ 265%</span> From previous
              period
            </p>
          </div>
        </div>
        <div className="Activities"></div>
      </div>
    </>
  );
};

export default User;
