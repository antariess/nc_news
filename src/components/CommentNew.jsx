import React, { Component } from 'react';
import './Comment.css'

class CommentNew extends Component {
  state = {
    body: ''
  }

  render() {
    return (
      <form className='box' onSubmit={(e) => this.props.postNewComment(e, this.state.body)}>
        <input className='input is-medium' type='text' placeholder='write your comment here...' onChange={(e) => this.handleOnChange(e, 'body')} value={this.state.body}/>
        <button className='button is-dark is-medium submitButton' type='submit'>Submit</button>
        <button className='button is-dark is-pulled-right is-medium' onClick={this.props.closeModal}>Cancel</button>
      </form>
    );
  }

  handleOnChange = (e, field) => {
    this.setState({
      [field]: e.target.value
    })
  }
}

export default CommentNew;