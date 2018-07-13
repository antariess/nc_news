import React, { Component } from 'react';
import Comments from './Comments';
import * as api from '../api';
import Vote from './Vote';

class Article extends Component {
  state = {
    article: {},
    posted: false
  }

  async componentDidMount() {    
    const id = this.props.match.params.article_id
    const newArticle = await api.getArticleById(id)
    this.setState({
      article: newArticle
    })
  }

  render() {
    console.log(this.props.user)
    const article = this.state.article
    return (
      <div>
        <h3>{article.title}</h3>
        <h4><em>{article.belongs_to}</em></h4>
        <p>{article.body}</p>
        <p>{article.created_by}</p>
        <div>
          <Vote votes={article.votes} ID={article._id} upvoteCall={this.upvoteCall}/>
           <span>{article.comments}</span>
        </div>
        <Comments user = {this.props.user} id = {this.props.match.params.article_id}/>
      </div>
    );
  }

  upvoteCall = (articleID, direction) => {
    api.upvoteArticle(articleID, direction)
      .catch(console.log)
  }

  
}

export default Article;