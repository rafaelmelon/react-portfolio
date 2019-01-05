import * as React from "react";

import { Intro, Portfolio } from "../../components/index";
import { API, APIRSS, USER } from "../../utils/index";

class HomePage extends React.Component {
  public state = {
    portfolio: [],
    error: null
  };

  public componentWillMount() {
    fetch(`${APIRSS}/v1/api.json?rss_url=${API}/feed/${USER}`)
      .then(res => res.json())
      .then(data => {
        const onlyPosts = data.items.filter(item => item.categories.length > 0);
        const portfolio = onlyPosts.map((item, i) => ({
          id: item.guid.split("/").pop(),
          title: item.title,
          image: item.thumbnail,
          type: item.categories[i]
        }));
        this.setState({ portfolio });
      })
      .catch(error => this.setState({ error }));
  }

  public render() {
    return (
      <div className="Home">
        <Portfolio portfolio={this.state.portfolio} />
        <Intro />
      </div>
    );
  }
}

export default HomePage;
