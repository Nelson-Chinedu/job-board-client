import React, { FunctionComponent } from 'react';

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
      </main>
    </>
  );
}

export default App;
