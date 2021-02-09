import React, { FunctionComponent } from 'react';
import HeroBottom from '../HeroBottom';
import HeroSection from '../HeroSection';
import Navigation from '../Navigation';


const Header: FunctionComponent<{}> = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <HeroBottom />
    </div>
  )
};

export default Header;
