import React from 'react'
import {Link} from 'react-router-dom'
import UserModal from './Modals/UserModal'

import 'bulma/css/bulma.css'

class ArticlePreview extends React.Component {
  state = {
    isUserModalVisible: false
  }

  render() {
    const article = this.props.article
    return (
      <li className='box'>
        <div className='content'>
          <Link to={`/articles/${article._id}`}> 
            <h3>{article.title}</h3>
          </Link>
          <h5>from {article.belongs_to}</h5>
          <p>{`${article.body.substr(0, 150)}...`}</p>
          <div>
            <span>comment count: {article.comments}</span>
            <span> | vote count: {article.votes}</span>
            <span className='is-pulled-right' onClick={this.handleUserModal}>by: {article.created_by}</span>   
            <span>{this.state.isUserModalVisible && <UserModal username = {article.created_by} closeModal={this.closeModal}/>}</span>     
          </div>  
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