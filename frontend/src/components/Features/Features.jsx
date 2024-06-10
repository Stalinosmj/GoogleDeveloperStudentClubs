import React from "react";
import "./Features.css" // Import the CSS file
import { assets } from "../../assets/assets";

const Features = () => {
  return (
    <div className="features">
      <div className="feature-item innovate">
        <div className="feature-item-left">
          <div className="feature-item-image feature-0">
            <img src={assets.innovate} alt="Innovate" />
          </div>
        </div>
        <div className="feature-item-right text" style={{ color: "#F4B400" }}>
          <h1 style={{ color: "#F4B400" }}>Innovate</h1>
          <p>
            Unleash the power of innovation by transcending conceptual limits.
            Transforming abstract ideas into groundbreaking solutions, our
            journey navigates the forefront of technology. With creativity as
            our compass, we pioneer, pushing boundaries to redefine the future
            and inspire change in the digital landscape.
          </p>
        </div>
      </div>
      <div className="feature-item collaborate">
        <div className="feature-item-left">
          <div className="feature-item-image feature-1">
            <img src={assets.collaborate} alt="Collaborate" />
          </div>
        </div>
        <div className="feature-item-right text" style={{ color: "#ea4335" }}>
          <h1 style={{ color: "#ea4335" }}>Collaborate</h1>
          <p>
            In the collaborative realm of Google Developer Student Clubs,
            individuals forge meaningful connections, freely exchanging
            knowledge. Together, they synergize efforts, channeling collective
            expertise towards the creation of impactful projects that transcend
            boundaries and leave a lasting imprint on the tech landscape.
          </p>
        </div>
      </div>
      <div className="feature-item empower">
        <div className="feature-item-left">
          <div className="feature-item-image feature-2">
            <img src={assets.empower} alt="Empower" />
          </div>
        </div>

        <div className="feature-item-right text" style={{ color: "#34A853" }}>
          <h1 style={{ color: "#34A853" }}>Empower</h1>
          <p>
            Empowerment through comprehensive skill development and fostering
            self-assurance enables individuals to play a transformative role in
            the dynamic tech landscape. Equipped with expertise and confidence,
            they are poised to make meaningful contributions that shape the
            future of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
