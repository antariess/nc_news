import React, { Component } from 'react';

class ArticleNew extends Component {
  state = {
    title: '',
    body: ''
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.postNewArticle(e, this.state.title, this.state.body)}>
        <input type='text' placeholder='Title' onChange={(e) => this.handleOnChange(e, 'title')} value ={this.state.title}/>
        <input type='text' placeholder='write your article here...' onChange={(e) => this.handleOnChange(e, 'body')} value={this.state.body}/>
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

export default ArticleNew;