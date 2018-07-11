import React from 'react'

const Comment = ({comment, user}) => {
  return (
    <li>
      <p>comment body</p>
      <p>created by</p>
      <div>
        <span>upvote num and button</span>
        <span>downvote num and button</span>
        <span>if created by user is same as user from props - delete button</span>
      </div>
    </li>
  )
}

export default Comment