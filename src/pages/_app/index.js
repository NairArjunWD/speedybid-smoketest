import React from "react";
import { Switch, Route, Router } from "./../../util/router";
import Homepage from "../homepage";
import NotFoundPage from "../not-found";
import ContactPage from "../contact";
import ListingsPage from "../listings";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* Swap listings page with real homepage */}
          <Route path="/" exact component={ListingsPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/listings/:location" exact component={ListingsPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
