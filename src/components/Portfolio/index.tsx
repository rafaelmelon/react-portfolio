import * as React from "react";
import { Link } from "react-router-dom";


interface PortfolioProps {
  portfolio: any[];
}

class Portfolio extends React.Component<PortfolioProps, undefined> {
  render () {
    return (
      <section className="b-worklist">
        {this.props.portfolio.map(item =>
          <Link key={item.id} to={`/${item.id}`} className="item">
            <div>
              <small>{item.type}</small>
              <h3>{item.title}</h3>
            </div>
            <img alt={item.title} src={item.image} />
          </Link>
        ) }
      </section>
    );
  }
}

export default Portfolio;
