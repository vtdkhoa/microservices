import React, { useState } from 'react'
import { commentsApi } from '../../apis'

function CommentCreate({ postId }) {
  const [content, setContent] = useState('')

  const onSubmit = async event => {
    event.preventDefault()
    await commentsApi.post(`/posts/${postId}/comments`, { content })
    setContent('')
    window.location.reload()
  }

  return (
    <form
      className="ui large transparent left icon input"
      onSubmit={onSubmit}
    >
      <i className="comment outline icon"></i>
      <input
        type="text"
        placeholder="Add a Comment"
        value={content}
        onChange={event => setContent(event.target.value)}
      />
    </form>
  )
}

export default CommentCreate