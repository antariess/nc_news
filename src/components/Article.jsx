import React, { Component } from 'react';
import Comments from './Comments'

class Article extends Component {
  state = {
    article: {},
    isUserVisible: false
  }

  // componentDidMount( {
  //   //axios call to get article by id from match
  // })

  render() {
    return (
      <div>
        <h3>TITILE</h3>
        <h4><em>topic it belongs to</em></h4>
        <p>body</p>
        <p>written by - modal of user using on click to change the state and render modal</p>
        <div><span>upvotes num and button</span><span>downvote num and button</span>--left right-- <span>comment count num ADD A COMMENT? MODAL</span></div>
        <Comments />
      </div>
    );
  }
}

export default Article;