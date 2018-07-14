import React, { Component } from 'react';

class CommentNew extends Component {
  state = {
    body: ''
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.postNewComment(e, this.state.body)}>
        <input type='text' placeholder='write your comment here...' onChange={(e) => this.handleOnChange(e, 'body')} value={this.state.body}/>
        <button type='submit'>Submit</button>
        <button onClick={this.props.closeModal}>Cancel</button>
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