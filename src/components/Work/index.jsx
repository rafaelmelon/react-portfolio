import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Work extends Component {
  constructor (props) {
    super(props)

    this.state = {
      works: [],
      work: {}
    }
  }

  componentDidMount () {
    const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40susana.vazquez.rguez&api_key=cp1yhs0mfcyyjmssl41mjltseoqzjazdfn2uzjlc&count=20'
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      //console.log(data.items)
      let worksArray = []
      data.items.forEach(item => {
        if(item.categories.length > 0){
          let workObject = {
            id: item.guid,
            title: item.title,
            subtitle: item.description.split('<h4>').pop().split('</h4>').shift(),
            description: item.description
          }
          worksArray.push(workObject)
        }else{
          return
        }
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
      <section className="b-work">
        <div className="container">
          <div className="row">
            <h1>{ this.state.work.title }</h1>
            <h2>{ this.state.work.subtitle }</h2>
            { this.state.work.description }
            <Link to='/'>Back</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Work
