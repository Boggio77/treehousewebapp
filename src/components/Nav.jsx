import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                TREH <i class="fa-solid fa-tree"></i>
              </Link>
            </div>
          </nav>
        </>
  );
}

export default Nav;
