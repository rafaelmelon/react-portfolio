import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Work extends Component {
  constructor (props) {
    super(props)

    this.state = {
      work: {}
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <section className="b-work">
        <div className="container">
          <div className="row">
            <h2>Contact</h2>
            <p>PEPEPE</p>
            <Link to='/'>Back</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Work
