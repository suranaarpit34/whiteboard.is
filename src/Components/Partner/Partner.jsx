import React from "react";
import { useState } from "react";
import "./Partner.css";
import { PartnerData } from "./PartnerData";
const Partner = () => {
  const [data] = useState(PartnerData);
  return (
    <>
      <section className="partner-section">
        <div className="partner-container">
          <div className="partner-wrapper">
            {data.map((el) => {
              return (
                <div key={el.id}>
                  <img src={el.image} alt="img"/>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
