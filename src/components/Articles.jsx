import React, { Component } from 'react';
import * as api from '../api'

import ArticlePreview from './ArticlePreview'
import './Articles.css'

class Articles extends Component {
state = {
  articles: []
}

componentDidMount(){
  api.getAllArticles((newArticles) => {
    this.setState({
      articles: newArticles
    })
  })
  
}

  render() {
    return (
      <ul className='articles'>
        {
          this.state.articles.map(article => {
            return (
              <ArticlePreview article= {article} key={article._id}/>
            )
          })
        }
      </ul>
    );
  }
}

export default Articles;