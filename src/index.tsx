import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes";

const rootEl = document.getElementById("root");

render(
  <AppContainer>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./containers/App/index", () => {
    const NewApp = require("./containers/App/index").default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      rootEl
    );
  });
}
