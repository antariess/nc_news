import React from 'react';
import {Redirect} from 'react-router-dom'
import Comment from './Comment';
import * as api from '../api';
import NewComment from './CommentNew'
import 'bulma/css/bulma.css'
import './ArticlePreview.css'
import UserContext from '../context'


class Comments extends React.Component {
  state = {
    comments: [],
    badRequest: false
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
    return this.state.badRequest
    ? <Redirect to='/400'/>
    : (
      <div className='container article'>
        <UserContext.Consumer>
          {user => {
            if (user._id) return <NewComment postNewComment={this.postNewComment}/>}
          }
        </UserContext.Consumer>
        <ul>
          {this.state.comments.map(comment => {
            return <li className='box' key={comment._id}>
              <Comment comment={comment} upvoteCall = {this.upvoteCall} removeComment={this.removeComment}/>
            </li>
          })}
        </ul>
      </div>
      
    )
  }

  //upvoting

  upvoteCall = (commentID, direction) => {
    api.upvoteComment(commentID, direction)
      .catch(err => {
        this.setState({
          badRequest:true
        })
      })
  }

  //new comment functionality
  postNewComment = async(e, body, user) => {
    e.preventDefault()
    const articleId = this.props.id
    const comment = {
      created_by: user._id,
      body,
      belongs_to: articleId
    }
    const postedComment = await api.newComment(articleId, comment)
    if(postedComment){
      this.setState({
        comments: [{...postedComment, created_by: user.username}, ...this.state.comments]
      })
    } else {
      this.setState({
        badRequest: true
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