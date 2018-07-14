import React from 'react'
import UserModal from './UserModal'
import Vote from './Vote'

class Comment extends React.Component {
  state = {
    isUserModalVisible: false,
  }

  render() {
    const comment = this.props.comment
    return (
      <li>
        <p>{comment.body}</p>
        <p onClick={this.handleUserModal}>{comment.created_by}</p>
        <span>{this.state.isUserModalVisible && <UserModal username = {comment.created_by} closeModal={this.closeModal}/>}</span>     
        <div>
          <Vote votes={comment.votes} ID={comment._id} upvoteCall = {this.props.upvoteCall}/>
          {this.props.user.username === comment.created_by && <button onClick={(e) => {this.props.removeComment(comment._id)}}>Delete</button>}
        </div>
      </li>
    )
  }
  handleUserModal = (e) => {
    this.setState({
      isUserModalVisible: true
    })
  }
  closeModal = (e) => {
    this.setState({
      isUserModalVisible: false
    })
  }    
}

export default Comment