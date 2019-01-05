import * as React from "react";
import { Link } from "react-router-dom";

import { logo } from "../../../assets/index";
import { linkedin } from "../../../assets/index";
import { twitter } from "../../../assets/index";

const Header = () => {
  return (
    <header className="b-nav">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="row justify-content-end">
              <div className="social">
                <Link to="/">{"info@suix.es"}</Link>
                <Link to="/">
                  <img src={twitter} />
                </Link>
                <Link to="/">
                  <img src={linkedin} />
                </Link>
                <Link to="/">
                  <img src={twitter} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
