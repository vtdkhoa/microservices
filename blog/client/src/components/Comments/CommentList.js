import React from 'react'

const CommentList = ({ comments }) => {
  return (
    <div className="content">
      <i className="comments icon"></i>
      {comments.length} comments
      <ul className="ui list">
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default CommentList