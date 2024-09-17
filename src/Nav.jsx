import React, { useState } from 'react';
import './App.css';
import './Nav.css';

function Nav() {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="index.html" className="logo"> 
        <img
          src="../public/images/"
          alt="logo"
        />
      </a>

      {/* Dropdown button visible only for screen sizes below 600px */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-wrapper ${menuOpen ? 'show' : ''}`}>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <li>
              <a href="location.html">Location</a>
            </li>
            <li>
              <a href="amenities.html">Amenities</a>
            </li>
            <li>
              <a href="gallery.html">Gallery</a>
            </li>
            {/* Book Now button inside the dropdown at the bottom */}
            <li className="cta-list-item">
              <a className="cta" href="https://www.airbnb.com/rooms/48921548?guests=1&adults=1&s=67&unique_share_id=e74681d9-84d9-4e11-b6e6-1f4f22038c0f">
                <button>Book Now</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
