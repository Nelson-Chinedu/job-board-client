import React, { FunctionComponent } from 'react';
import About from './components/About';

import Category from './components/Category';
import Header from './components/Header';
import TrendingJob from './components/TrendingJob';

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
      </main>
    </>
  );
}

export default App;
