import { Button } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Pages/Sidebar";
import User from "../Pages/User";

import "../Styles/Cards.css";

const Cards = () => {
  return (
    <>
      <Sidebar />
      <div className="Card_box">
        <div className="content_box">
          <div className="image_box">
            <div>
              <img src={require("../asset/Images/pie-chart.png")} alt="" />
            </div>
            <div>
              <p>Revenue</p>

              <p>$21,456</p>
            </div>
          </div>
          <div>
            <span
              style={{
                border: "1px  green",
                borderRadius: "10px",
                color: "green",
                marginLeft: "50px",
                padding: "0px 5px 0px 5px",
              }}
            >
              {" "}
              + 2.65%
            </span>
          </div>
        </div>

        <div className="content_box">
          <div className="image_box">
            <div>
              <img src={require("../asset/Images/shopping-bag.png")} alt="" />
            </div>
            <div>
              <p>Orders</p>

              <p>5,643</p>
            </div>
          </div>
          <div>
            <span
              style={{
                borderRadius: "10px",
                backgroundColor: "",
                color: "red",
                marginLeft: "50px",
                padding: "0px 5px 0px 5px",
              }}
            >
              {" "}
              - 0.82%
            </span>
          </div>
        </div>
        <div className="content_box">
          <div className="image_box">
            <div>
              <img src={require("../asset/Images/add-user.png")} alt="" />
            </div>
            <div>
              <p>Customers</p>

              <p>45,254</p>
            </div>
          </div>
          <div>
            <span
              style={{
                borderRadius: "10px",
                marginLeft: "50px",
                backgroundColor: "",
                color: "red",
                padding: "0px 5px 0px 5px",
              }}
            >
              {" "}
              - 1.04%
            </span>
          </div>
        </div>
      </div>

      <User />

      <div className="Graph_card">
        <div className="Graph_data">
          <>
            <h6>This month</h6>
            <h4>$24,568</h4>
          </>
          <div
            className="graph_content"
            style={{ borderRight: "1px solid gray" }}
          >
            <p style={{ color: "gray", fontSize: "12px", fontWeight: "bold" }}>
              Orders
            </p>
            <h6 style={{ borderBottom: "1px solid gray" }}>5,643</h6>
            <p style={{ color: "gray", fontSize: "12px", fontWeight: "bold" }}>
              Order value
            </p>
            <h6 style={{ borderBottom: "1px solid gray" }}>12.03%</h6>
            <p style={{ color: "gray", fontSize: "12px", fontWeight: "bold" }}>
              income
            </p>
            <h6>$35,652</h6>
          </div>

          <div
            className="graph_content"
            style={{ borderLeft: "1px solid gray" }}
          >
            <p style={{ color: "gray", fontSize: "12px", fontWeight: "bold" }}>
              Sales
            </p>
            <h6 style={{ borderBottom: "1px solid gray" }}>16,273</h6>
            <p style={{ color: "gray", fontSize: "12px", fontWeight: "bold" }}>
              Customers
            </p>
            <h6 style={{ borderBottom: "1px solid gray" }}>21,456</h6>
            <p style={{ color: "gray", fontSize: "12px", fontWeight: "bold" }}>
              Expenses
            </p>
            <h6>$12,248</h6>
          </div>
        </div>
        <div className="Graph">
          <img src={require("../asset/Images/preview.png")} alt="" />
        </div>
      </div>

      <div className="Tri_cards">
        <div>
          <img src={require("../asset/Images/1.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../asset/Images/2.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../asset/Images/3.jpg")} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cards;
