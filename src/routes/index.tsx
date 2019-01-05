import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { AboutPage, NotFoundPage, PostPage } from "../components/index";
import { App, HomePage } from "../containers/index";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/about" component={AboutPage} />
      <Route path="/:id" component={PostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </App>
);

export default AppRoutes;
