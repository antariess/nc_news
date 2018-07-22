import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Comments from './Comments';
import * as api from '../api';
import Vote from './Vote';
import UserModal from './Modals/UserModal';
import './ArticlePreview.css'

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
    return this.state.invalidUrl ? <Redirect to='/404'/>
    : this.state.voteGoneWrong ? <Redirect to='/400'/>
    : (
      <div className='container article'>
        <div className='box content'>
          <h3 className='has-text-danger'>{article.title}</h3>
          <h5><em>from {article.belongs_to}</em></h5>
          <p>{article.body}</p>
          <p className='is-pulled-right' onClick={this.handleUserModal}><em className='has-text-danger'>created by: {article.created_by}</em></p>
          <span >{this.state.isUserModalVisible && <UserModal  username = {article.created_by} closeModal={this.closeModal}/>}</span>  
          <div>
          <Vote votes={article.votes} ID={article._id} upvoteCall={this.upvoteCall}/>
           <span> comments: {article.comments}</span>
          </div>
        </div>      
        {article._id && <Comments user = {this.props.user} id = {this.props.match.params.article_id}/> }
      </div>
    );    
  }

  upvoteCall = (articleID, direction) => {
    api.upvoteArticle(articleID, direction)
      .catch(err => {
        this.setState({
          voteGoneWrong: true
        })
      })
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