import * as React from "react";
import Slider from "react-slick";

import { carousel } from "../../utils/index";

class Carousel extends React.Component {
  componentWillMount () {
    window.scrollTo(0, 0);
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
    };

    return (
      <section className="b-carousel">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {carousel.map((item, key) => (<div key={key}>
                <h1>{item.quote}</h1>
                <p>{item.author}</p>
              </div>)
              )}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
