import React, { useState } from 'react'
import { postsApi } from '../../apis'

function PostCreate() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onSubmit = async event => {
    event.preventDefault()
    await postsApi.post('/posts', { title, content })
    setTitle('')
    setContent('')
  }

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter a Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Content</label>
        <textarea
          rows="3"
          placeholder="Enter a Content"
          value={content}
          onChange={event => setContent(event.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className={title && content ? "ui button primary" : "ui button disabled"}
      >Submit</button>
    </form>
  )
}

export default PostCreate