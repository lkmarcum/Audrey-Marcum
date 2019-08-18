import React from "react";
import audrey from "../audrey-marcum.jpg";

const Sidebar = props => {
  return (
    <header className="sidebar-container">
      <img src={audrey} />
      <p className="side-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="link-container">
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
      </div>
    </header>
  );
};

export default Sidebar;
