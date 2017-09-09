// Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// Data
import dataCarousel from '../../dataCarousel'

class Carousel extends Component {

  constructor (props) {
    super(props)
    this.state = {
      quotes: []
    }
  }

  componentWillMount () {

    window.scrollTo(0,0)

    this.state.quotes = dataCarousel
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
        <Slider {...settings}>
          { this.state.quotes.map((item) => {
            return <div  key={ item.id }>
              <h1>{ item.quote }</h1>
              <p>{ item.author }</p>
            </div>
          }) }
        </Slider>
      </section>
    )
  }
}

export default Carousel
