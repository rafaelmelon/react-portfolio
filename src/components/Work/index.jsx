// Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Components
import Contact from '../Contact/index.jsx'

// Data
import url from '../../data/url'

class Work extends Component {
  constructor (props) {
    super(props)

    this.state = {
      works: [],
      work: {}
    }
  }

  componentDidMount () {
    window.scrollTo(0,0)

    fetch(url)
    .then(res => res.json())
    .then(data => {
      let worksArray = [],
          workObject = {},
          links
      data.items.forEach(item => {
        workObject = {
          id: item.guid,
          title: item.title,
          subtitle: item.description.split('<h4>').pop().split('</h4>').shift(),
          description: item.description
        }
        worksArray.push(workObject)
      })
      let idRoute = "https://medium.com/p/"+this.props.match.params.id
      let result = worksArray.filter(obj => {
        return obj.id === idRoute;
      })
      this.setState({ works: worksArray, work: result[0] })
    })
    .catch((error) => console.log(error))
  }

  render () {
    return (
      <div className="Work">
        <section className="b-work">
          <div className="container">
            <div className="row">
              <h1>{ this.state.work.title }</h1>
              <div dangerouslySetInnerHTML={{ __html: this.state.work.description }} />
              <Link className="anchornav" to='/'>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175">
                  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                </svg>Home
              </Link>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    )
  }
}

export default Work
