import React, { Component } from 'react';

class Error401 extends Component {
  render() {
    console.log('i render')
    return (
      <div>
        <h4>User not found!</h4>
        <p>Please choose a username from the followong: 'jessjelly', 'tickle122', 'grumpy19', 'happyamy2016' or 'cooljmessy'</p>
      </div>
    );
  }
}

export default Error401;