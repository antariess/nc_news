import React, { Component } from 'react';
import * as api from '../api';

import Articles from './Articles'

class Topic extends Component {
  state = {
    topicArticles: []
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