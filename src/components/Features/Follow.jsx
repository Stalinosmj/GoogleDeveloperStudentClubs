import React from "react";
import "./Follow.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Follow = () => {
  return (
    <>
      <h1 className="social-buttons">
        Follow us on <br></br>
      </h1>
      <div className="social-buttons">
        <a
          href="mailto:yourmail@example.com"
          className="social-button mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          className="social-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          className="social-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          className="social-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default Follow;
