import React, { Component } from 'react';

class ArticleNew extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Title'/>
        <input type='text' placeholder='write your article here...'/>
        <button>Submit</button>
      </form>
    );
  }
}

export default ArticleNew;