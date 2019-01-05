import * as React from "react";
import { Link } from "react-router-dom";

import { logo } from "../../../assets/index";
import { linkedin } from "../../../assets/index";
import { twitter } from "../../../assets/index";
import { medium } from "../../../assets/index";
import { socialLinks } from "../../../utils/constants";

const Header = () => {
  return (
    <header className="b-nav">
      <div className="container">
        <div className="row justify-content-between align-items-center flex-column flex-sm-row">
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
                <a href={`mailto:${socialLinks.email}`} target="_blank">
                  {"info@suix.es"}
                </a>
                <a href={socialLinks.linkedin} target="_blank">
                  <img src={linkedin} />
                </a>
                <a href={socialLinks.medium} target="_blank">
                  <img src={medium} />
                </a>
                <a href={socialLinks.twitter} target="_blank">
                  <img src={twitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
