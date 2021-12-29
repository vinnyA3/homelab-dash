import React from "react";
import ReactDOM from "react-dom";

import "./sass/index.scss";

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <div className="profile-media">
        <div className="profile-img">
          <img
            src={require("../public/assets/images/gura-pfp.jpg")}
            alt="Gawr Gura PFP"
          />
        </div>

        <h1>Hello From Gawr Gura</h1>
        <p>This is my Homelab Page!</p>
      </div>

      <div>
        <ul>
          <li>
            <a href="http://photoprism.box">PhotoPrism</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const targetEl = document.getElementById("app");

ReactDOM.render(<App />, targetEl);
