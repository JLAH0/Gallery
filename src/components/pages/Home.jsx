import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Gallery from '../Gallery';
import Subscription from '../Subscription';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Gallery />
      <Subscription />
      <Footer />
    </>
  );
}

export default Home;