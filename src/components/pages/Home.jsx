import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Subscription from '../Subscription';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Subscription />
      <Footer />
    </>
  );
}

export default Home;