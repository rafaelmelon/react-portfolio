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
      <section>
        <h3>WORK</h3>
        <h4></h4>
        <p></p>
        <Link to='/'>Back</Link>
      </section>
    )
  }
}

export default Work
