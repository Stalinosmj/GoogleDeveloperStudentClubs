import React from 'react'
import './About.css'
import { assets } from '../../assets/assets';
const About = () => {
  return (
    <div className="about">
      <div className="title">About GDSC BMC</div>
      <div className="line"></div>
      <div className="about2">
        <div className="about-text">
          GDSC BMC is a platform for budding and aspiring developers aiming to
          bridge the gap between theory and practice. Our goal is to help them
          broaden their understanding of emerging technologies and shape their
          skills into a better version. The club intends to provide students
          with hands-on technology through Google's curated resources.
        </div>
        <img src={assets.about} />
      </div>
    </div>
  );
}

export default About