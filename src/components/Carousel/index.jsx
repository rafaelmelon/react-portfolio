// Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// Data
import slides from '../../data/carousel'

class Carousel extends Component {

  constructor (props) {
    super(props)
    this.state = {
      quotes: []
    }
  }

  componentWillMount () {
    window.scrollTo(0,0)
    this.state.quotes = slides
  }

  render () {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      fade: true,
      speed: 5000,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <section className="b-carousel">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              { this.state.quotes.map((item, key) => {
                return <div key={ key }>
                  <h1>{ item.quote }</h1>
                  <p>{ item.author }</p>
                </div>
              }) }
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}

export default Carousel
