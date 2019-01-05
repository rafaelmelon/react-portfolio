import * as React from "react";
import { Link } from "react-router-dom";

import { iconArrow } from "../../assets/index";
import Contact from "../Contact/index";

class AboutPage extends React.Component {
  public render() {
    return (
      <div className="About">
        <section className="b-about">
          <div className="container">
            <div className="row">
              <Link className="anchornav" to="/">
                <img src={iconArrow} />
                Home
              </Link>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    );
  }
}

export default AboutPage;
