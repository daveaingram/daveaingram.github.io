import React from "react";
import "./PageTitle.css";

class PageTitle extends React.Component {
  render() {
    const { text, main } = this.props;
    if (text) {
      if (main) {
        return <h1 className="page-title">Dave <span className="highlight">Ingram</span></h1>;
      }
      return <h1 className="page-title">{text}</h1>;
    }
    return null;
  }
}

export default PageTitle;
