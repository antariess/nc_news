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
              handleArticleClick={this.handleArticleClick}
            />
          );
        })}
      </ul>
    );
  }
  handleArticleClick = e => {
    const clickedTitle = e.target.innerText;
    const articleId = this.props.articles.filter(
      article => article.title === clickedTitle
    )[0]._id;
  };
}

export default Articles;
