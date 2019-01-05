import * as React from "react";
import { Link } from "react-router-dom";

import { linkedin } from "../../../assets/index";
import { twitter } from "../../../assets/index";

const Footer = () => {
  return (
    <footer className="b-footer">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <p>Made with love by © suix.com</p>
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
    </footer>
  );
};

export default Footer;
