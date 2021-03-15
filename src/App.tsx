import { FunctionComponent, useEffect } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { BackTop } from 'antd';

import Footer from './components/Footer';
import PostJob from './components/PostJob';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Success from './components/PaymentFeedback/Sucess';
import Failure from './components/PaymentFeedback/Failure';
import FindJob from './components/FindJob';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


const App:FunctionComponent<{}> = () => {
  useEffect(() => {
    NProgress.configure({ easing: 'ease', speed: 500 });
    NProgress.start();
    NProgress.done();
  },[])
  
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
        <Route path="/remote-jobs/search">
          <FindJob />
        </Route>
        <Route path="/payment/success">
          <Success />
        </Route>
        <Route path="/payment/failure">
          <Failure />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
      <BackTop />
    </BrowserRouter>
  );
}

export default App;
