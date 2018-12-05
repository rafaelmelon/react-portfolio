import * as React from "react";

export interface ContentProps {
  children: React.ReactNode;
}

class Content extends React.Component<ContentProps, undefined> {
  render() {
    return (
      <div className="Content">
        {this.props.children}
      </div>
    );
  }
}

export default Content;
