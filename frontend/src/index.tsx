import React from "react";
import ReactDOM from "react-dom";

// global sass import -- see sass/readme.md for info
import "./sass/index.scss";

import Wrapper from "./layout/Wrapper";
import ServicesListView from "./components/ServicesList";

const App: React.JSX = () => (
  <Wrapper>
    <ServicesListView />
  </Wrapper>
);

const targetEl = document.getElementById("app");

ReactDOM.render(<App />, targetEl);
