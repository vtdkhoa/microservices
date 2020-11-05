import React from 'react'

const CommentList = ({ comments }) => {
  return (
    <div className="content">
      <i className="comments icon"></i>
      {comments.length} comments
      <ul className="ui list">
        {comments.map(comment => {
          let content

          if (comment.status === 'approved') {
            content = comment.content
          }

          if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation.'
          }

          if (comment.status === 'rejected') {
            content = 'This comment has been rejected.'
          }

          return <li key={comment.id}>{content}</li>
        })}
      </ul>
    </div>
  )
}

export default CommentList