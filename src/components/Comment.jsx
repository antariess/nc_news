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
          <span>if created by user is same as user from props - delete button</span>
        </div>
      </li>
    )
  }
  handleUserModal = (e) => {
    console.log('i got clicked')
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