import React, { Component } from 'react';
import * as api from '../api';
import {Redirect} from 'react-router-dom'
import Articles from './Articles'
import NewArticle from './ArticleNew'
import 'bulma/css/bulma.css'
import './ArticlePreview.css'

class Topic extends Component {
  state = {
    topicArticles: [],
    isNewArticleModalPressed: false,
    redirectToArticle: '',
    errorNewPost: false,
    invalidUrl: false
  }

  render() {
    return this.state.errorNewPost
    ? <Redirect to='/400'/>
    : this.state.invalidUrl 
    ? <Redirect to='/404'/>
    : this.state.redirectToArticle 
    ? <Redirect to={`/articles/${this.state.redirectToArticle}`} /> 
    : <div className='container topic'>
        <h2 className='topicTitle'>{this.props.match.params.topic_slug}</h2>
        {this.props.user._id && <button onClick={this.handleNewArticleModal}>post new article</button>}
        {this.state.isNewArticleModalPressed && <NewArticle postNewArticle={this.postNewArticle} closeModal={this.closeModal}/>}
        <Articles articles = {this.state.topicArticles}/>
      </div>
  }

  fetchArticlesByTopic = async () => {
    const slug = this.props.match.params.topic_slug
    await api.getArticlesByTopic(slug)
      .then(res => {
        const newArticles = res.data.articles
        this.setState({
          topicArticles: newArticles
        })
      })
      .catch(err => {
        this.setState({
          invalidUrl:true
        })
      })
  }

  componentDidMount() {
    this.fetchArticlesByTopic()
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props){
      this.fetchArticlesByTopic()
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
        errorNewPost: true
      })
    }
  }
}

export default Topic;