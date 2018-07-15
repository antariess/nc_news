import React, { Component } from 'react';
import * as api from '../api';
import {Redirect} from 'react-router-dom'

import Articles from './Articles'
import NewArticle from './ArticleNew'

class Topic extends Component {
  state = {
    topicArticles: [],
    isNewArticleModalPressed: false,
    redirectToArticle: '',
    invalidUrl: false
  }

  render() {
    return this.state.invalidUrl
    ? <Redirect to='/400'/>
    : this.state.redirectToArticle 
    ? <Redirect to={`/articles/${this.state.redirectToArticle}`} /> 
    : <div>
        <h2>{this.props.match.params.topic_slug}</h2>
        {this.props.user._id && <button onClick={this.handleNewArticleModal}>post new article</button>}
        {this.state.isNewArticleModalPressed && <NewArticle postNewArticle={this.postNewArticle} closeModal={this.closeModal}/>}
        <Articles articles = {this.state.topicArticles}/>
      </div>
  }

  fetchTopics = async () => {
    const slug = this.props.match.params.topic_slug
    const newArticles = await api.getArticlesByTopic(slug)
    this.setState({
      topicArticles: newArticles
    })
  }

  componentDidMount() {
    this.fetchTopics()
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props){
      this.fetchTopics()
    }
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

  postNewArticle = async(e, title, body) => {
    e.preventDefault()
    const slug = this.props.match.params.topic_slug
    const article = {
      title, 
      created_by: this.props.user._id,
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
        invalidUrl: true
      })
    }
  }
}

export default Topic;