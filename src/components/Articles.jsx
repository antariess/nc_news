import React from "react";
import {Redirect} from 'react-router-dom'
import * as api from '../api'
import ArticlePreview from "./ArticlePreview";
import "./Articles.css";

class Articles extends React.Component {
  state = {
    articles: [],
    invalidUrl: false
  }

  fetchArticlesByTopic = async () => {
    const slug = this.props.slug
    await api.getArticlesByTopic(slug)
      .then(res => {
        const newArticles = res.data.articles
        this.setState({
          articles: newArticles
        })
      })
      .catch(err => {
        this.setState({
          invalidUrl:true
        })
      })
  }

  fetchAllArticles = async () => {
    await api.getAllArticles()
      .then(res => {
        const articles = res.data.articles
        const newArticles = [...articles].sort((a, b) => {
          const aScore = a.votes + a.comments
          const bScore = b.votes + b.comments
          return bScore - aScore
        })
        this.setState({
          articles: newArticles
        })
      })
      .catch(err => {
        this.setState({
          invalidUrl: true
        })
      })
  }

  async componentDidMount() {
    this.props.slug 
    ? this.fetchArticlesByTopic()
    : this.fetchAllArticles()
  }

  componentDidUpdate(prevProps){
    if(this.props !== prevProps){
      this.fetchArticlesByTopic()
    }
  }

  render(){
    return this.state.invalidUrl
    ? <Redirect to='/404'/>
    : (
      <ul className="articles content">
        {this.state.articles.map(article => {
          return (
            <ArticlePreview
              article={article}
              key={article._id}
            />
          );
        })}
      </ul>
    );
  }
}

export default Articles;
