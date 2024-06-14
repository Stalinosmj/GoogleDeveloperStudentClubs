import React from "react";
import "./Domains.css";
import { assets } from "../../assets/domains";

const CustomCard = ({ image, caption }) => (
  <div className="custom-card">
    <img src={image} alt={caption} className="custom-card-image" />
    <div className="custom-card-caption">{caption}</div>
  </div>
);

const Domains = () => {
  const cards = [
    { image: assets.flutter, caption: "App Development" },
    { image: assets.cloud, caption: "Google Cloud" },
    { image: assets.other, caption: "Other" }
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", color:"red" }}>We Specialize On</h1>
      <div className="custom-container">
        <div className="custom-card-grid">
          {cards.map((card, index) => (
            <CustomCard key={index} image={card.image} caption={card.caption} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Domains;
