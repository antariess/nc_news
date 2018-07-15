import React, { Component } from 'react';
import * as FA from 'react-icons/lib/fa';
import 'bulma/css/bulma.css'


class Vote extends Component {
  state = {
    vote: false
  }

  render() {
    return (
      <div className='inline'>        
        <p>
        votes: {this.state.vote? this.props.votes +1: this.props.votes} 
        <span className='inline' onClick={this.handleUpVote} id='up' ref='up'>  {this.state.vote? <FA.FaHeart/>: <FA.FaHeartO/>}</span>
        </p>
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