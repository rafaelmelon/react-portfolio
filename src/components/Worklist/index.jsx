// Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Data
import url from '../../data/url'

class WorkList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      works: []
    }
  }

  componentWillMount () {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let worksArray = [],
          type,
          i
      data.items.forEach(item => {
        for (i = 0; i < item.categories.length; i++) {
          if(item.categories[i] === "post" || item.categories[i] === "project" || item.categories[i] === "projects") {
            worksArray.push({
              id: item.guid.split("/").pop(),
              title: item.title,
              image: item.description.split('<img alt="" src="').pop().split('">').shift(),
              type: item.categories[i],
            })
          }
        }
      })
      this.setState({ works: worksArray })
    })
    .catch((error) => console.log(error))
  }

  render () {
    return (
      <section className="b-worklist">
        { this.state.works.map(item =>
          <Link key={item.id} to={ `/${item.id}` } className="item">
            <div>
              <small>{ item.type }</small>
              <h3>{ item.title }</h3>
            </div>
            <img alt={ item.title } src={ item.image } />
          </Link>
        ) }
      </section>
    )
  }
}

export default WorkList
