import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Comments from './Comments';
import * as api from '../api';
import Vote from './Vote';
import UserModal from './Modals/UserModal';

class Article extends Component {
  state = {
    article: {},
    posted: false,
    isUserModalVisible: false,
    invalidUrl: false,
    voteGoneWrong: false
  }

  componentDidMount() {    
    const id = this.props.match.params.article_id
    api.getArticleById(id)
      .then(res => {
        const newArticle = res.data.article
        this.setState({
          article: newArticle
        })
      })
      .catch(err => {
        this.setState({
          invalidUrl: true
        })
      })
  }

  render() {
    const article = this.state.article
    return this.state.invalidUrl ? (<Redirect to='/404'/>)
    : this.state.voteGoneWrong ? (<Redirect to='/400'/>)
    : (
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