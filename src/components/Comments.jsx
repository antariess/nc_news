import React from 'react'
import Comment from './Comment'

class Comments extends React.Component {
  state = {
    comments: []
  }

  // componentDidMount(){
  //   //axios call for all comments
  // }

  render() {
    return(
      <ul>
        {this.state.comments.map(comment => {
          return <Comment key={comment._id} comment={comment}/>
        })}
      </ul>
    )
  }
}

export default Comments