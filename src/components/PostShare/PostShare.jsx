import React from "react";
import "./PostShare.css";
import {
  FacebookShareButton, FacebookShareCount, FacebookIcon,
  LinkedinShareButton, LinkedinShareCount, LinkedinIcon,
  TwitterShareButton, TwitterShareCount, TwitterIcon,
} from 'react-share';

const formatSiteUrl = (siteUrl, path) =>
  siteUrl + path;

class PostShare extends React.Component {
  render() {
    const { postNode, postPath, config } = this.props;
    const post = postNode.frontmatter;
    const url = formatSiteUrl(config.siteUrl, postPath);

    console.log(url)
    console.log(post)
    return (
      <section className="share">
        <h4>Share this post</h4>
        <div className="share-buttons">
          <FacebookShareButton url={url} >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url={url} title={post.title}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton url={url} via="daveaingram" title={post.title}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
      </section>
    );
  }
}

export default PostShare;
