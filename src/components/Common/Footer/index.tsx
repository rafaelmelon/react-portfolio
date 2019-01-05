import * as React from "react";

import { linkedin } from "../../../assets/index";
import { twitter } from "../../../assets/index";
import { medium } from "../../../assets/index";
import { socialLinks } from "../../../utils/constants";

const Footer = () => {
  return (
    <footer className="b-footer">
      <div className="container">
        <div className="row justify-content-between align-items-center flex-sm-row flex-column-reverse">
          <div className="col-auto">
            <p>Made with love by © suix.com</p>
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
    </footer>
  );
};

export default Footer;
