import React from 'react'
import UserModal from './Modals/UserModal'
import Vote from './Vote'
import 'bulma/css/bulma.css'


class Comment extends React.Component {
  state = {
    isUserModalVisible: false,
  }

  render() {
    const comment = this.props.comment
    return (
      <li className='flex'>
        {this.props.user.username === comment.created_by && <button className='button is-dark is-pulled-right is-small' onClick={(e) => {this.props.removeComment(comment._id)}}>Delete</button>}           <p>{comment.body}</p>
        <p className='is-pulled-right' onClick={this.handleUserModal}><em className='has-text-danger'> by: {comment.created_by}</em></p>
        <span>{this.state.isUserModalVisible && <UserModal username = {comment.created_by} closeModal={this.closeModal}/>}</span>  
          <Vote votes={comment.votes} ID={comment._id} upvoteCall = {this.props.upvoteCall}/>
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