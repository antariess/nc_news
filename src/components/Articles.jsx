import React from "react";

import ArticlePreview from "./ArticlePreview";
import "./Articles.css";

const Articles = ({articles}) => {
  return (
    <ul className="articles">
      {articles.map(article => {
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

export default Articles;
