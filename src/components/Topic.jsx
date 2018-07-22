import React, { Component } from 'react';
import * as api from '../api';
import {Redirect} from 'react-router-dom'
import Articles from './Articles'
import NewArticle from './ArticleNew'
import 'bulma/css/bulma.css'
import './ArticlePreview.css'
import UserContext from '../context'

class Topic extends Component {
  state = {
    slug: this.props.match.params.topic_slug,
    isNewArticleModalPressed: false,
    redirectToArticle: '',
    errorNewPost: false
  }

  render() {
    return this.state.errorNewPost
    ? <Redirect to='/400'/>
    : this.state.invalidUrl 
    ? <Redirect to='/404'/>
    : this.state.redirectToArticle 
    ? <Redirect to={`/articles/${this.state.redirectToArticle}`} /> 
    : <div className='container topic'>
        <h2 className='topicTitle has-text-danger'>{this.props.match.params.topic_slug}</h2>
        <UserContext.Consumer>
          {user => {
            if (user._id) 
             {return <button className='button is-medium is-outlined newArticleButton' onClick={this.handleNewArticleModal}>post new article</button>}
          }}
        </UserContext.Consumer>
        {this.state.isNewArticleModalPressed && <NewArticle postNewArticle={this.postNewArticle} closeModal={this.closeModal}/>}
        <Articles slug = {this.props.match.params.topic_slug}/>
      </div>
  }

  //new article functionality
  handleNewArticleModal = () => {
    this.setState({
      isNewArticleModalPressed: true
    })
  }

  closeModal = () => {
    this.setState({
      isNewArticleModalPressed: false
    })
  }

  postNewArticle = async(e, title, body, user) => {
    e.preventDefault()
    const slug = this.props.match.params.topic_slug
    const article = {
      title, 
      created_by: user._id,
      body,
      belongs_to: slug
    }
    const postedArticle = await api.newArticle(slug, article)
    if(postedArticle){
      this.setState({
        redirectToArticle: postedArticle._id
      })
    } else {
      this.setState({
        errorNewPost: true
      })
    }
  }
}

export default Topic;