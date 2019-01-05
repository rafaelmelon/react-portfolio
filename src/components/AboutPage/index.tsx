import * as React from "react";
import { Link } from "react-router-dom";

import { about } from "../../utils/constants";
import { iconArrow } from "../../assets/index";

class AboutPage extends React.Component {
  public render() {
    return (
      <div className="About">
        <section className="b-about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>10 real facts about me</h1>
                {about.map(item => (
                  <div
                    key={item.title}
                    className="b-about__item d-flex flex-column align-items-center"
                  >
                    <h2>{item.title}</h2>
                    <img src={item.img} />
                    <div className="subtitle">
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                ))}
                <Link className="anchornav" to="/">
                  <img src={iconArrow} />
                  Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutPage;
