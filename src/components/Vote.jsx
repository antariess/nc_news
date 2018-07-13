import React, { Component } from 'react';


class Vote extends Component {
  state = {
    vote: false
  }

  render() {
    return (
      <div>
        <button onClick={this.handleUpVote} id='up' ref='up'>{this.state.vote? `voted`: `not voted`}</button>
        <p>{this.state.vote? this.props.votes +1: this.props.votes}</p>
      </div>
    );
  }


  handleUpVote = async(e) => {
    console.log(this.props.ID)
    if (this.state.vote) {
      this.props.upvoteCall(this.props.ID, 'down')
      this.setState({
        vote: false,
      })
    } else {
      this.props.upvoteCall(this.props.ID, 'up')
      this.setState({
        vote: true
      })
    }
  }
}

export default Vote;