import React from 'react';
import {Redirect} from 'react-router-dom'
import Comment from './Comment';
import * as api from '../api';
import NewComment from './CommentNew'

class Comments extends React.Component {
  state = {
    comments: [],
    failedNewComment: false
  }

  async componentDidMount() {
    const newComments = await api.fetchCommentsByArticleId(this.props.id)
    newComments.sort((a, b) => {
      return b.created_at - a.created_at
    })
    this.setState({
      comments: newComments
    })
  }

  render() {
    return this.state.failedNewComment
    ? <Redirect to='/400'/>
    : (
      <div>
        {this.props.user._id && <NewComment postNewComment={this.postNewComment}/>}
        <ul>
          {this.state.comments.map(comment => {
            return <Comment key={comment._id} comment={comment} upvoteCall = {this.upvoteCall} user={this.props.user} removeComment={this.removeComment}/>
          })}
        </ul>
      </div>
      
    )
  }

  upvoteCall = (commentID, direction) => {
    api.upvoteComment(commentID, direction)
      .catch(console.log)
  }

  //new comment functionality
  postNewComment = async(e, body) => {
    e.preventDefault()
    const articleId = this.props.id
    const comment = {
      created_by: this.props.user._id,
      body,
      belongs_to: articleId
    }
    const postedComment = await api.newComment(articleId, comment)
    if(postedComment){
      this.setState({
        comments: [{...postedComment, created_by: this.props.user.username}, ...this.state.comments]
      })
    } else {
      this.setState({
        failedNewComment: true
      })
    }
  }

  //delete functionality
  removeComment = async(commentId) => {
    await api.deleteComment(commentId)
    const newComments = this.state.comments.filter(comment => {
      return comment._id !== commentId
    })
    this.setState({
      comments: newComments
    })
  }
}


export default Comments