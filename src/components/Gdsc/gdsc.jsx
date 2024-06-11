import React from "react";
import "./gdsc.css";
import { assets } from "../../assets/image-gallery";

// eslint-disable-next-line react/prop-types
const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

const GDSC = () => (<div className="container">
  
    <div className="card-grid">
      <Card className="large blue">Google Developer Students Club</Card>
  
      <Card className="small ">
        <img src={assets.nova} alt="Profile" />
      </Card>
      <h1
        className="card"
        style={{ color: "rgba(0, 0, 0, 0.599)", fontSize: "45px" }}
      >
        <br />
        Collaborate
      </h1>
      <Card className="small green">Connect</Card>
      <h1
        className="card"
        style={{ color: "rgba(0, 0, 0, 0.599)", fontSize: "45px" }}
      >
        Leverage <br />
        Your Ideas
      </h1>
      <Card className="small green">
        <img src={assets.teamwork2} alt="Books" />
      </Card>
      <Card className="small yellow">
        <code>&lt;/&gt;</code>
      </Card>
      <Card className="small ">
        <img src={assets.zlat} alt="Books" />
      </Card>
      <Card className="small red">Empower</Card>
      <Card className="small">
        <img src={assets.flutter1} alt="Mic" />
      </Card>
      <Card className="small blue">
        <img src={assets.teamwork} alt="Mic" />
      </Card>
    </div>
</div>
);

export default GDSC;
