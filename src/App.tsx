import React, { FunctionComponent } from 'react';
import About from './components/About';

import Category from './components/Category';
import Header from './components/Header';
import Subscription from './components/Subscription';
import TrendingJob from './components/TrendingJob';
import Footer from './components/Footer';

const App:FunctionComponent<{}> = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main mt-8 p-8">
        <Category />
        <TrendingJob />
        <About />
        <Subscription />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
