import React, { Component } from 'react';
import Comments from './Comments';
import * as api from '../api';
import Vote from './Vote';
import UserModal from './Modals/UserModal'

class Article extends Component {
  state = {
    article: {},
    posted: false,
    isUserModalVisible: false
  }

  async componentDidMount() {    
    const id = this.props.match.params.article_id
    const newArticle = await api.getArticleById(id)
    this.setState({
      article: newArticle
    })
  }

  render() {
    const article = this.state.article
    return (
      <div>
        <h3>{article.title}</h3>
        <h4><em>{article.belongs_to}</em></h4>
        <p>{article.body}</p>
        <p onClick={this.handleUserModal}>{article.created_by}</p>
        <span>{this.state.isUserModalVisible && <UserModal username = {article.created_by} closeModal={this.closeModal}/>}</span>     
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

  handleUserModal = (e) => {
    console.log('clicked')
    this.setState({
      isUserModalVisible: true
    })
  }
  closeModal = (e) => {
    this.setState({
      isUserModalVisible: false
    })
  }     
}

export default Article;