import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TREH <i class='fa-solid fa-tree' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/location'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Location
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/amenities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Amenitites
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to='https://www.airbnb.com/rooms/48921548?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Charleston%2C%20SC&pets=0&search_mode=regular_search&check_in=2024-09-15&check_out=2024-09-20&source_impression_id=p3_1725916216_P3jQ9qqJTBPgr5wy&previous_page_section_name=1001&federated_search_id=6e3e5a36-80f7-4c44-a541-3a4362f1b6cb'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Book Now
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Book Now</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;