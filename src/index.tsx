import * as React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const Root = () => (
  <Router>
    <AppRoutes />
  </Router>
);

const HotRoot = hot(module)(Root);

render(<HotRoot />, document.getElementById("root"));
