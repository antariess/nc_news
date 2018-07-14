import React, { Component } from 'react';
import * as api from '../../api'

import './Modals.css'

class UserModal extends Component {
  state = {
    userInfo: {}
  }
  async componentDidMount() {
    const newUserInfo = await api.getUserInfo(this.props.username)
    this.setState({
      userInfo: newUserInfo
    })
  }

  render() {
    if(!this.state.userInfo.name){
      return <p>no such user</p>
    }
    return (
      <div className='modal'>
        <div className='modalContent'>
          <p>{this.state.userInfo.name}</p>
          <img className = 'avatar' src={this.state.userInfo.avatar_url} alt='the avatar the user has chosen'/>
          <br/>
          <button onClick={this.props.closeModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default UserModal;