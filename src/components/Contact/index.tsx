import * as React from "react";

const Contact = () => {
  return (
    <section className="b-contact">
      <div className="container">
        <div className="row">
          <div className="four columns">
            <h2>Contact</h2>
          </div>
          <div className="eight columns">
            <ul>
              <li>
                <a href="mailto:info@suix.es">info@suix.es</a>
              </li>
              <li>(+34) 678 914 083</li>
              <br />
              <li>
                <a
                  href="https://www.linkedin.com/in/susanavazquezrodriguez/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@susana.vazquez.rguez"
                  target="_blank"
                >
                  Medium
                </a>
              </li>
              <li>
                <a href="https://twitter.com/usavor/" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
