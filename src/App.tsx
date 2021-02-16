import React, { FunctionComponent } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Footer from './components/Footer';
import PostJob from './components/PostJob';
import Navigation from './components/Navigation';
import Landing from './components/Landing';

const App:FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/post-job">
          <PostJob />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
