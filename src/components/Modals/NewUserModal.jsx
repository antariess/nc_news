import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class NewUSerModal extends Component {
  state = {
    inputText: ''
  }

  render() {
    return (
      <div className='modal'>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <form onSubmit={(e) => {
            this.props.closeModal('isUserPressed')
            this.props.logIn(e, this.state.inputText)
          }}>
            <input className='input is-medium' type='text' onChange={this.handleOnChange} value={this.state.inputText} placeholder='Whats your username?'/>
            <button className='button is-outlined is-medium' type='submit'>Log in!</button>
            <button className='button is-outlined is-medium' onClick={() => this.props.closeModal('isUserPressed')}>Close</button>
          </form>
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