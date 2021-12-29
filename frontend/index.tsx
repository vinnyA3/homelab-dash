import React from "react";
import ReactDOM from "react-dom";

import "./sass/index.scss";

function App(): JSX.Element {
  return (
    <div>
      <h1>Hello From Gawr Gura</h1>
      <p>Hello there, angel from my nightmare</p>
    </div>
  );
}

const targetEl = document.getElementById("app");

ReactDOM.render(<App />, targetEl);
