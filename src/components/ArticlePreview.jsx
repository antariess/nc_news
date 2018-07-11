import React from 'react'
import {Link} from 'react-router-dom'

import './ArticlePreview.css'

const ArticlePreview = ({article, handleArticleClick}) => {
  return (
    <li className='article'>
      <Link to={`/articles/${article._id}`}> 
        <h4 onClick={handleArticleClick}>{article.title}</h4>
        <h5>from {article.belongs_to}</h5>
        <p>{`${article.body.substr(0, 150)}...`}</p>
        <div>
          <span>{article.comments}</span>
          <span>{article.votes}</span>
          <span>{article.created_by}</span>        
        </div>
      </Link>
    </li>
  )
}

//li to be a Link to Article.... /articles/article._id

export default ArticlePreview