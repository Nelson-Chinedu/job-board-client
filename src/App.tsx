import React, { FunctionComponent } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import About from './components/About';
import Category from './components/Category';
import Header from './components/Header';
import Subscription from './components/Subscription';
import TrendingJob from './components/TrendingJob';
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
