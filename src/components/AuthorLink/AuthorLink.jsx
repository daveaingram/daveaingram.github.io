import React from "react";
import Link from "gatsby-link";
import "./AuthorLink.css";

class AuthorLink extends React.Component {
  render() {
    const { name } = this.props;
    return <span>{name}</span>;
  }
}

export default AuthorLink;
