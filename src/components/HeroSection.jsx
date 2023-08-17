import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Gallery Glimpse</h1>
      <p className='sub_title_hero'>A glimpse of the world through the lenses <br></br>of talented photographers</p>
      <div className='hero-btns'>
      <Button buttonStyle="btn--outline" buttonSize="btn--large" linkTo="https://www.youtube.com" externalLink>
GET STARTED
</Button>
        </div>
    </div>
  );
}

export default HeroSection;