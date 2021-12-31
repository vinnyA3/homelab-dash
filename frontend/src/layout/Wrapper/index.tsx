import React from "react";

import * as classes from "./styles.module.scss";

const Header: React.JSX = ({
  title,
  introductoryText,
}: {
  title: string;
  introductoryText: string;
}) => (
  <header className={classes.header}>
    <h1>{title}</h1>
    <p>{introductoryText}</p>
  </header>
);

const Wrapper: React.JSX = ({ children }: { children: React.JSX[] }) => (
  <div className={classes.wrapper}>
    <Header
      title="Essential components based on variants and auto-layouts"
      introductoryText="This is my fucking Homelab Page!"
    />
    {children}
  </div>
);

export default Wrapper;
