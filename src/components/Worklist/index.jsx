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
      let worksArray = []
      data.items.forEach(item => {
        if(item.categories.length > 0){
          let workObject = {
            id: item.guid.split("/").pop(),
            title: item.title,
            image: item.description.split('<img alt="" src="').pop().split('">').shift(),
            type: item.categories[0],
          }
          worksArray.push(workObject)
        }else{
          return
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
          <Link key={item.id} to={ `/post/${item.id}` } className="item">
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
