import React from 'react'
import './ArticlePreview.css'

const ArticlePreview = ({article}) => {
  return (
    <li className='article' >
      <h4>{article.title} from {article.belongs_to}</h4>
      <p>{`${article.body.substr(0, 150)}...`}</p>
      <div>
        <span>{article.comments}</span>
        <span>{article.votes}</span>
        <span>{article.created_by}</span>        
      </div>
    </li>
  )
}


export default ArticlePreview