import React from 'react';
import Comment from './Comment';
import * as api from '../api';


class Comments extends React.Component {
  state = {
    comments: []
  }

  async componentDidMount() {
    const newComments = await api.fetchCommentsByArticleId(this.props.id)
    this.setState({
      comments: newComments
    })
  }

  render() {
    return(
      <ul>
        {this.state.comments.map(comment => {
          return <Comment key={comment._id} comment={comment} upvoteCall = {this.upvoteCall}/>
        })}
      </ul>
    )
  }

  upvoteCall = (commentID, direction) => {
    api.upvoteComment(commentID, direction)
      .catch(console.log)
  }
}


export default Comments