import React, { FunctionComponent } from 'react';

import Category from './components/Category';
import Header from './components/Header';

const App:FunctionComponent<{}> = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main mt-8 p-8">
        <Category />
      </main>
    </>
  );
}

export default App;
