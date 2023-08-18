import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/services'><h2>About Us</h2></Link>
          </div>
          <div className='footer-link-items'>
            
            <Link to='https://wa.me/23059722158'><h2>Contact Us</h2></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            
            <Link to='/'><h2>Gallery</h2></Link>
          </div>
          <div className='footer-link-items'>
            <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/unsplash/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/unsplash/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/?hl=FR'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/?lang=fr'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fa-brands fa-x-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://fr.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
        <div className='footer-logo'>
  <Link to='/'>
  <img src='/Images/Logo_Gallery-Glimpse.png' alt='Logo Image' className='Gallery-Glimpse-logo' />
  </Link>
</div>  
          <small className='website-rights'>Gallery Glimpse © 2023</small>
          <small className='website-rights'>Terms & conditions&emsp;|&emsp; Privacy Policy</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
