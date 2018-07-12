import React, { Component } from 'react';
import Comments from './Comments'
import * as api from '../api'

class Article extends Component {
  state = {
    article: {},
    isUserVisible: false,
    articleComments: [],
    
  }

  async componentDidMount() {    
    const id = this.props.match.params.article_id
    const newData = await api.getArticleById(id)
    this.setState({
      article: newData[0],
      articleComments: newData[1].data.comments
    })
  }

  render() {
    const article = this.state.article
    return (
      <div>
        <h3>{article.title}</h3>
        <h4><em>{article.belongs_to}</em></h4>
        <p>{article.body}</p>
        <p>{article.created_by}</p>
        <div>
          <span>button up {article.votes} button down</span>
           right-- 
           <span>{article.comments} ADD A COMMENT? MODAL</span>
        </div>
        <Comments comments = {this.state.articleComments}/>
      </div>
    );
  }
}

export default Article;