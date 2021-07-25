import React from "react";
import { Switch, Route, Router } from "./../../util/router";
import Homepage from "../homepage";
import NotFoundPage from "../not-found";
import ContactPage from "../contact";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
