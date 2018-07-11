import React from 'react'
import './ArticlePreview.css'

const ArticlePreview = ({article, handleArticleClick}) => {
  return (
    <li className='article'>
      <h4 onClick={handleArticleClick}>{article.title}</h4>
      <h5>from {article.belongs_to}</h5>
      <p>{`${article.body.substr(0, 150)}...`}</p>
      <div>
        <span>{article.comments}</span>
        <span>{article.votes}</span>
        <span>{article.created_by}</span>        
      </div>
    </li>
  )
}

//li to be a Link to Article.... /articles/article._id

export default ArticlePreview