import React from 'react'

const Comment = ({comment, user}) => {
  return (
    <li>
      <p>{comment.body}</p>
      <p>{comment.created_by}</p>
      <div>
        <span>upvote button {comment.votes} dpwn button</span>
        <span>if created by user is same as user from props - delete button</span>
      </div>
    </li>
  )
}

export default Comment