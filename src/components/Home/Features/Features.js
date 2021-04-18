import React from "react";
import blocks from "../../../images/blocks.png";
import house from "../../../images/house.png";
import color from "../../../images/color-palette.png";
import playground from "../../../images/playground.png";
import FeatureDetails from "../FeatureDetails/FeatureDetails";

const serviceData = [
  {
    name: "HAPPY ENVIRONMENT",
    img: house,
  },
  {
    name: "ACTIVE LEARNING",
    img: blocks,
  },
  {
    name: "CREATIVE LESSONS",
    img: color,
  },
  {
    name: "AMAZING PLAYGROUND",
    img: playground,
  },
];

const Features = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h2>OUR ACTIVITIES</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-2 pt-5">
          {serviceData.map((service) => (
            <FeatureDetails service={service} key={service.name}></FeatureDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
