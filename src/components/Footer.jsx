import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/services'><h2>About Us</h2></Link>
          </div>
          <div class='footer-link-items'>
            
            <Link to='https://wa.me/23059722158'><h2>Contact Us</h2></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <Link to='/'><h2>Gallery</h2></Link>
          </div>
          <div class='footer-link-items'>
            <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/unsplash/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/unsplash/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/?hl=FR'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/?lang=fr'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa-brands fa-x-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://fr.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <div class='footer-logo'>
  <Link to='/'>
  <img src='/Images/Logo_Gallery-Glimpse.png' alt='Logo Image' className='Gallery-Glimpse-logo' />
  </Link>
</div>  
          <small class='website-rights'>Gallery Glimpse © 2023</small>
          <small class='website-rights'>Terms & conditions&emsp;|&emsp; Privacy Policy</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
