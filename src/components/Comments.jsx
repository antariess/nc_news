import React from 'react'
import Comment from './Comment'

class Comments extends React.Component {
  render() {
    return(
      <ul>
        {this.props.comments.map(comment => {
          return <Comment key={comment._id} comment={comment}/>
        })}
      </ul>
    )
  }
}

export default Comments