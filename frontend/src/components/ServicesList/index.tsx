import React from "react";

import images from "../../../public/assets/images/**";

import * as classes from "./styles.module.scss";

// TODO: mock - remove after parse yml config
const MockedServices = [
  {
    description: "Your fucking photos",
    link: "gura-pfp.jpg",
    name: "PhotoPrism",
  },
  {
    description: "Your fucking photos",
    link: "calliope.pfp.jpg",
    name: "PhotoPrism",
  },
  {
    description: "Your fucking photos",
    link: "watson-pfp.jpg",
    name: "PhotoPrism",
  },
  {
    description: "Your fucking photos",
    link: "kiara-pfp.jpg",
    name: "PhotoPrism",
  },
  {
    description: "Your fucking photos",
    link: "ina.png",
    name: "PhotoPrism",
  },
];

const ServiceBlock: React.JSX = ({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) => (
  <div className={classes.block}>
    <a href="http://photoprism.box" className={classes.blockLink}>
      <img src={images[link]} alt="" className={classes.blockImage} />

      <div className={classes.blockContent}>
        <h3 className={classes.blockName}>{name}</h3>
        <p>{description}</p>
      </div>
    </a>
  </div>
);

const ServicesListView: React.JSX = () => (
  <main className={classes.blockList}>
    {MockedServices.map(({ name, link, description }) => (
      <ServiceBlock
        key={name}
        name={name}
        link={link}
        description={description}
      />
    ))}
  </main>
);

export default ServicesListView;
