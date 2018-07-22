import React from 'react'
import UserModal from './Modals/UserModal'
import Vote from './Vote'
import UserContext from '../context'

class Comment extends React.Component {
  state = {
    isUserModalVisible: false,
  }

  render() {
    const {comment} = this.props
    return (
      <div className='flex' key={comment._id}>
        <UserContext.Consumer>
          {user => {
            if (user.username === comment.created_by) return <button className='button is-dark is-pulled-right is-small' onClick={(e) => {this.props.removeComment(comment._id)}}>Delete</button>}}           
        </UserContext.Consumer>
        <p>{comment.body}</p>
        <p className='is-pulled-right' onClick={this.handleUserModal}><em className='has-text-danger'> by: {comment.created_by}</em></p>
        <span>{this.state.isUserModalVisible && <UserModal username = {comment.created_by} closeModal={this.closeModal}/>}</span>  
          <Vote votes={comment.votes} ID={comment._id} upvoteCall = {this.props.upvoteCall}/>
      </div>
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