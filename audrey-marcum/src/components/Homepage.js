import React from "react";
import pupper from "../pupper.jpg";
import poetry from "../poetry.jpg";
import art from "../art.jpg";
import books from "../books.jpg";
import construction from "../under-construction.JPG";

const Homepage = props => {
  return (
    <div className="home-content">
      <img src={construction} className="construction" />
      <p className="top-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <img src={pupper} className="top-img" />
      <p className="middle-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="img-links">
        <img src={poetry} />
        <img src={art} />
        <img src={books} />
      </div>
      <p className="bottom-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Homepage;
