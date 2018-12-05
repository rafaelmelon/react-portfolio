import * as React from "react";
import { Route, Switch } from "react-router-dom";

import App from "../containers/App/index";
import Home from "../containers/Home/index";
import { Post, NotFound } from "../components/index";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/:id" component={ Post } />
      <Route component={ NotFound } />
    </Switch>
  </App>
);

export default AppRoutes;
