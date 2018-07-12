import React from 'react'
import {Link} from 'react-router-dom'

import './ArticlePreview.css'
import UserModal from './UserModal'

class ArticlePreview extends React.Component {
  state = {
    isUserModalVisible: false
  }

  render() {
    const article = this.props.article
    return (
      <li className='article'>
        <Link to={`/articles/${article._id}`}> 
          <h4>{article.title}</h4>
        </Link>
        <h5>from {article.belongs_to}</h5>
        <p>{`${article.body.substr(0, 150)}...`}</p>
        <div>
          <span>{article.comments}</span>
          <span>{article.votes}</span>
          <span onClick={this.handleUserModal}>{article.created_by}</span>   
          <span>{this.state.isUserModalVisible && <UserModal username = {article.created_by} closeModal={this.closeModal}/>}</span>     
        </div>        
      </li>
    )
  }

  handleUserModal = (e) => {
    this.setState({
      isUserModalVisible: true
    })
  }
  closeModal = (e) => {
    this.setState({
      isUserModalVisible: false
    })
  }
}

//li to be a Link to Article.... /articles/article._id

export default ArticlePreview