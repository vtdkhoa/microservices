import React, { useState, useEffect } from 'react'
import { query } from '../../apis'
import CommentCreate from '../Comments/CommentCreate'
import CommentList from '../Comments/CommentList'

function PostList() {
  const [posts, setPosts] = useState({})

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await query.get('/posts')
    setPosts(response.data)
  }

  if (!posts) {
    return <div>Loading...</div>
  }

  return (
    Object.values(posts).map(post => (
      <div key={post.id} className="four wide column">
        <div className="ui card">
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="meta">Time</div>
            <div className="description">
              <p>{post.content}</p>
            </div>
          </div>
          <CommentList comments={post.comments} />
          <div className="extra content">
            <CommentCreate postId={post.id} />
          </div>
        </div>
      </div>
    ))
  )
}

export default PostList