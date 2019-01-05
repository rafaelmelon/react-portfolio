import * as React from "react";
import ScrollToTop from "react-scroll-up";

import { Content, Footer, Header } from "../../components/index";

import "../../assets/scss/index.scss";

export interface AppProps {
  children: React.ReactNode;
}

class App extends React.Component<AppProps> {
  public render() {
    return (
      <div className="App">
        <Header />
        <Content>{this.props.children}</Content>
        <Footer />
        <ScrollToTop showUnder={180} duration={1500}>
          <span className="top">
            <svg version="1.1" viewBox="0 0 129 129">
              <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
            </svg>
            <span>Top</span>
          </span>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
