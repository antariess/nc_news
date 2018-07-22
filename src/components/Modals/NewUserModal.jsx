import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import UserContext from '../../context';

class NewUSerModal extends Component {
  state = {
    inputText: ''
  }

  render() {
    return (
      <div className='modal'>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <div >
            <UserContext.Consumer>
              {user => user.username
              ? <button className='modalItem button is-outlined is-medium' onClick={(e) => {
                this.props.closeModal('isUserPressed')
                this.props.logOut()
              }}>Log out!</button>      
                
              : <span><input className='modalItem input is-medium' type='text' onChange={this.handleOnChange} value={this.state.inputText} placeholder='Whats your username?'/>
              <button className='modalItem button is-outlined is-medium' onClick={(e) => {
                                                                                            this.props.closeModal('isUserPressed')
                                                                                            this.props.logIn(e, this.state.inputText)
                                                                                          }}>Log in!</button>    </span>  
            }
            </UserContext.Consumer>
            <button className='modalItem button is-outlined is-medium' onClick={() => this.props.closeModal('isUserPressed')}>Close</button>
          </div>
        </div>
      </div>
    );
  }

  handleOnChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
}

export default NewUSerModal;