import * as React from "react";
import { Link } from "react-router-dom";

interface PortfolioProps {
  portfolio: any[];
}

class Portfolio extends React.Component<PortfolioProps> {
  public render() {
    return (
      <section className="b-worklist">
        {this.props.portfolio.map(item => (
          <Link key={item.id} to={`/${item.id}`} className="item">
            <h3>{item.title}</h3>
            <img alt={item.title} src={item.image} />
          </Link>
        ))}
      </section>
    );
  }
}

export default Portfolio;
