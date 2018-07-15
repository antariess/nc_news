import React, { Component } from 'react';

class Error400 extends Component {
  render() {
    return (
      <div>
        <h4>Error 400!</h4>
        <p>We couldn't post that, sorry! Please log in, complete all fields and try again.</p>
      </div>
    );
  }
}

export default Error400;