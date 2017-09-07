import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Carousel from '../Carousel/index.jsx'
import About from '../About/index.jsx'

class Worklist extends Component {

  constructor (props) {
    super(props)
    this.state = {
      works: []
    }
  }

  componentWillMount () {
    const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40susana.vazquez.rguez&api_key=cp1yhs0mfcyyjmssl41mjltseoqzjazdfn2uzjlc&count=20'
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data.items)
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
          console.log(worksArray)
        }else{
          return;
        }
      })
      this.setState({ works: worksArray })
    })
    .catch((error) => console.log(error))
  }

  render () {
    return (
      <div>
        <Carousel />
        <section id="works" className="b-worklist">
          { this.state.works.map(item =>
            <Link key={item.id} to={`/${item.id}`} className="item">
              <div>
                <small>{ item.type }</small>
                <h3>{ item.title }</h3>
              </div>
              <img src={ item.image } />
            </Link>
          ) }
        </section>
        <About />
      </div>
    )
  }
}

export default Worklist
