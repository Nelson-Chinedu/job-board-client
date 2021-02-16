import React, { FunctionComponent } from 'react';
import About from '../About';
import Category from '../Category';
import HeroBottom from '../HeroBottom';
import HeroSection from '../HeroSection';
import Navigation from '../Navigation';
import Subscription from '../Subscription';
import TrendingJob from '../TrendingJob';

const Landing: FunctionComponent<{}> = () => {
  return (
    <>
      <header>
        <HeroSection />
        <HeroBottom />
      </header>
      <main className="main px-3 py-8 mt-8 md:px-8">
        <Category />
        <TrendingJob />
        <About />
        <Subscription />
      </main>
    </>
  )
};

export default Landing;