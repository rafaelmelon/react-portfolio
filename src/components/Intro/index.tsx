import * as React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="b-intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text-left">
              Hi! I am <b>Susana Vázquez a Product Designer / UX / UI</b> in the
              digital world and an architect in the “real” one.
            </p>
            <p className="text-left">
              For me, everything is about people & design.
            </p>
            <p className="text-left">
              <Link to="/about">
                <span>10</span> real facts about me
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
