import React from "react";

import "../Styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
   
      <div className="Dash_menu">
      <h4>Menu</h4>
        <div>
          <h3 style={{ color: "white" }}>
            <i className="fi fi-rr-apps"></i> Dashboard{" "}
            <i class="fi fi-rr-caret-up"></i>
          </h3>
        </div>
        <div>
          <h3 style={{ color: "white" }}>Ecommerce</h3>
        </div>
        <div>
          <h3>Saas</h3>
        </div>
        <div>
          <h3>Crypto</h3>
        </div>
        <div className="Application_menu">
          <p>Applications</p>
          <h3> <i class="fi fi-rr-calendar-lines"></i> Calender <i class="fi fi-br-caret-down"></i></h3>
          <h3> <i class="fi fi-rr-comment"></i> Chat <i class="fi fi-br-caret-down"></i></h3>
          <h3> <i class="fi fi-rr-file-chart-line"></i> File Manager <i class="fi fi-br-caret-down"></i></h3>
          <h3> <i class="fi fi-rr-shop"></i> Ecommerce <i class="fi fi-br-caret-down"></i></h3>
          <h3> <i class="fi fi-rr-envelope"></i> Email <i class="fi fi-br-caret-down"></i></h3>
          <h3> <i class="fi fi-rr-file invoice dollar"></i> Invoices <i class="fi fi-br-caret-down"></i></h3>
          <h3> <i class="fi fi-rr-briefcase"></i> Projects <i class="fi fi-br-caret-down"></i></h3>
          <h3> <i class="fi fi-rr-wifi-alt"></i> Contacts <i class="fi fi-br-caret-down"></i></h3>
        </div>

        <div className="layout" >
          <p>Layouts</p>
          <p>Pages</p>
        </div>
        <div className="Auth">
          <h3><i class="fi fi-rr-user-add"></i> Authentication</h3>
          <h3><i class="fi fi-rs-box-alt"></i> Utility <i class="fi fi-br-caret-down"></i></h3>
        </div>
        <div className="components">
        <h3><i class="fi fi-rr-coins"></i> UI Elements <i class="fi fi-br-caret-down"></i></h3>
          <h3><i class="fi fi-rs-form"></i> Forms <i class="fi fi-br-caret-down"></i></h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
