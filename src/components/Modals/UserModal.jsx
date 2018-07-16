import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import * as api from '../../api'
import 'bulma/css/bulma.css'
import './Modals.css'

class UserModal extends Component {
  state = {
    userInfo: {},
    invalidUser: false
  }
  async componentDidMount() {
    await api.getUserInfo(this.props.username)
      .then(res => {
        const newUserInfo = res.data.user
        this.setState({
          userInfo: newUserInfo
        })
      })
      .catch(err => {
        this.setState({
          invalidUser:true
        })
      })
  }

  render() {
    return this.state.invalidUser
    ? <Redirect to='/401'/>
    : (
      <div className='modal'>
        <div className='modal-background'></div>
        <div className='modal-content is-pulled-right box userbox'>
          <h4 className='username'>{this.state.userInfo.name}</h4>
          <img className = 'avatar' src={this.state.userInfo.avatar_url} alt='the avatar the user has chosen'/>
          <br/>
          <button className='button is-dark is-pulled-right' onClick={this.props.closeModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default UserModal;