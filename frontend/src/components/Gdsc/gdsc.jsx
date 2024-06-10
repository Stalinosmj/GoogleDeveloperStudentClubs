import React from "react";
import "./gdsc.css";
import { assets } from "../../assets/image-gallery";

// eslint-disable-next-line react/prop-types
const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

const GDSC = () => (
  <div className="card-grid">
    <Card className="large blue">Google Developer Students Club</Card>
    <Card className="small yellow">Creativity</Card>
    <Card className="small green">
      <img src={assets.git} alt="Profile" />
    </Card>
    <Card className="small blue">Ambition</Card>
    <Card className="small red">
      <code>&lt;/&gt;</code>
    </Card>
    <Card className="small yellow">
      <img src={assets.core_team1} alt="Books" />
    </Card>
    <Card className="small green">Empower</Card>
    <Card className="small blue">
      <img src="path/to/mic-icon.png" alt="Mic" />
    </Card>
  </div>
);

export default GDSC;
