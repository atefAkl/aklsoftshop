import React from "react";
import "./AdvantagesSec.css";
import { advantagesSection } from "../../data/data";
import MainHeading from "../Reusable-Components/MainHeading";

function AdvantagesSec() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="Advantages py-5  text-center text-md-start"
    >
      <MainHeading>Why buy from lap shop</MainHeading>
      <div className="advSec container row mt-5">
        {advantagesSection.map((adv) => (
          <div
            key={adv.title}
            className="advantagesItem col-12 col-md-6 col-lg-3 mb-2"
          >
            <div
              className="advantagesIcon"
              style={{
                backgroundImage: "url('" + adv.image + "')",
              }}
            ></div>
            <div className="details">
              <h5>{adv.title}</h5>
              <p>{adv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvantagesSec;
