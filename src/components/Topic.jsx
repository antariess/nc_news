import React, { Component } from 'react';

class Topic extends Component {
  state = {
    topicArticles: []
  }

  componentDidMount() {
    //axios.get articles by topic slug
  }

  render() {
    return (
      <div>
        <h2>TITLEEEE of topic</h2>
        <Articles articles = {this.state.topicArticles}/>
      </div>
    );
  }
}

export default Topic;