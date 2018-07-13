import React, { Component } from 'react';
import './Modals.css'

class NewUSerModal extends Component {
  state = {
    inputText: ''
  }

  render() {
    return (
      <div className='modal'>
        <div className='modalContent'>
          <form onSubmit={(e) => this.props.logIn(e, this.state.inputText)}>
            <p>Whats your username?</p>
            <input type='text' onChange={this.handleOnChange} value={this.state.inputText}/>
            <button type='submit'>Log in!</button>
            <button onClick={() => this.props.closeModal('isUserPressed')}>Close</button>
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