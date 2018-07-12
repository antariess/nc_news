import React, { Component } from 'react';

class Vote extends Component {
  state = {
    up: 1,
    down: 1
  }

  disableVote = (ref) => {
    this.refs[ref].setAttribute("disabled", "disabled")
  }

  enableVote = (ref) => {
    this.refs[ref].removeAttribute("disabled")
  }

  handleUpVote = (e) => {
    if(this.state.up - 1 === 0){
      desableVote(e.target.ref)
      this.setState({
        up: 0,
        down: 2
      })
    } else {
      this.setState({
        up: 1,
        down: 1
      })
    }
  }

  

  render() {
    return (
      <div>
        <button ref="up">Up</button>
        <p>num</p>
        <button ref="down">Down</button>
      </div>
    );
  }
}

export default Vote;