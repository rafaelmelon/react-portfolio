import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound, Post } from "../components/index";
import App from "../containers/App/index";
import Home from "../containers/Home/index";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/:id" component={Post} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default AppRoutes;
