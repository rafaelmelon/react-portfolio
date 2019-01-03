import * as React from "react";

import { Content, Footer, Header } from "../../components/index";

import "../../assets/scss/index.scss";

export interface AppProps {
  children: React.ReactNode;
}

class App extends React.Component<AppProps, undefined> {
  public render() {
    return (
      <div className="App">
        <Header />
        <Content>{this.props.children}</Content>
        <Footer />
      </div>
    );
  }
}

export default App;
