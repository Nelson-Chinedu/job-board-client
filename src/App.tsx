import { FunctionComponent, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { UpCircleTwoTone } from "@ant-design/icons";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Footer from "./components/Footer";
import PostJob from "./components/PostJob";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Success from "./components/PaymentFeedback/Sucess";
import Failure from "./components/PaymentFeedback/Failure";
import FindJob from "./components/FindJob";
import DisplayJobCategories from "./components/DisplayJobCategories";
import NotFound from "./components/NotFound";

const App: FunctionComponent<{}> = () => {
  useEffect(() => {
    NProgress.configure({ easing: "ease", speed: 500 });
    NProgress.start();
    NProgress.done();
  }, []);

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
        <Route path="/categories/:url">
          <DisplayJobCategories />
        </Route>
        <Route path="/payment/success">
          <Success />
        </Route>
        <Route path="/payment/failure">
          <Failure />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop showUnder={160}>
        <UpCircleTwoTone style={{ fontSize: "40px", color: "#FF8148" }} />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
