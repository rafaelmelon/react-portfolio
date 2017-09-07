import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

  const routes = {
    email: "info@suix.com",
    linkedin: "https://www.linkedin.com/in/susanavazquezrodriguez/",
    medium: "https://medium.com/@susana.vazquez.rguez",
    twitter: "https://twitter.com/usavor",
  }

  return (
    <section className="b-contact">
      <div className="container">
        <div className="row">
          <div className="four columns">
            <h2>Contact</h2>
          </div>
          <div className="eight columns">
            <ul>
              <li><Link to={ `mailto:${ routes.email }` } target="_blank">{ routes.email }</Link></li>
              <li>(+34) 678 914 083</li>
              <br />
              <li><Link to={ routes.linkedin } target="_blank">LinkedIn</Link></li>
              <li><Link to={ routes.medium } target="_blank">Medium</Link></li>
              <li><Link to={ routes.twitter } target="_blank">Twitter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
