import * as React from "react";
import { Link } from "react-router-dom";

import { logo } from "../../../assets/index";

const Header = () => {
  return (
    <header className="b-nav">
      <div className="container">
        <div className="row">
          <Link className="logo" to="/">
            <img src={logo} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
