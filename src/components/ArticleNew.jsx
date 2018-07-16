import React, { Component } from 'react';
import './ArticlePreview.css'

class ArticleNew extends Component {
  state = {
    title: '',
    body: ''
  }

  render() {
    return (
      <form className='flex' onSubmit={(e) => this.props.postNewArticle(e, this.state.title, this.state.body)}>
        <input className='newArticleItem input is-medium' type='text' placeholder='Title' onChange={(e) => this.handleOnChange(e, 'title')} value ={this.state.title}/>
        <input className='newArticleItem input is-medium' type='text' placeholder='write your article here...' onChange={(e) => this.handleOnChange(e, 'body')} value={this.state.body}/>
        <button className='newArticleItem button is-medium is-outlined' type='submit'>Submit</button>
        <button className='newArticleItem button is-medium is-outlined' onClick={this.props.closeModal}>Cancel</button>
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