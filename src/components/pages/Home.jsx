import React, { useRef } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Gallery from '../Gallery';
import Subscription from '../Subscription';
import AboutUsSection from '../AboutUsSection';

function Home() {
  const galleryRef = useRef(null); 

  const handleScrollToGallery = () => {

    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection scrollToGallery={handleScrollToGallery} />
      <div ref={galleryRef}>
      <AboutUsSection />
        <Gallery />
      </div>
      <Subscription />
    </>
  );
}

export default Home;
