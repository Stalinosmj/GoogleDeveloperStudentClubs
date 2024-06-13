import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={assets.gdsclogo}alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="">Home</a>
        <a href="">Team</a>
        <a href="#">Events</a>
        <a href="https://developers.google.com/community/gdsc">About-GDSC</a>
      </div>
    </nav>
  );
}

export default Navbar