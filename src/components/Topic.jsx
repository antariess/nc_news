import React, { Component } from 'react';
import * as api from '../api';

import Articles from './Articles'

class Topic extends Component {
  state = {
    topicArticles: []
  }

  componentDidMount() {
    const cb = (newArticles) => {
      this.setState({
        topicArticles: newArticles
      })
    }
    const slug = this.props.match.params.topic_slug
    api.getArticlesByTopic(cb, slug)
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props){
      const cb = (newArticles) => {
        this.setState({
          topicArticles: newArticles
        })
      }
      const slug = this.props.match.params.topic_slug
      api.getArticlesByTopic(cb, slug)
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.match.params.topic_slug}</h2>
        <Articles articles = {this.state.topicArticles}/>
      </div>
    );
  }
}

export default Topic;