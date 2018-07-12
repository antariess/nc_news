import React, { Component } from "react";

import ArticlePreview from "./ArticlePreview";
import "./Articles.css";

class Articles extends Component {
  render() {
    return (
      <ul className="articles">
        {this.props.articles.map(article => {
          return (
            <ArticlePreview
              article={article}
              key={article._id}
            />
          );
        })}
      </ul>
    );
  }
}

export default Articles;
