import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
        <Link to='/' onClick={closeMobileMenu}>
        <img src='/Images/Logo_Gallery-Glimpse.png' alt='Logo Image' className='Gallery-Glimpse-logo-nav' />
</Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>

            <li>
              <Link
                to='https://wa.me/23059722158'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {button && (
  <a href='https://wa.me/23059722158'>
    <Button buttonStyle='btn--outline'>Contact Us</Button>
  </a>
)}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

