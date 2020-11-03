import React, { Component } from 'react'
import { postsApi } from '../../apis'
import CommentCreate from '../Comments/CommentCreate'
import CommentList from '../Comments/CommentList'

class PostList extends Component {
  state = {
    posts: {}
  }

  componentDidMount() {
    this.fetchPosts()
  }

  // componentDidUpdate(prevState) {
  //   if (prevState.posts !== this.state.posts) {
  //     this.fetchPosts()
  //   }
  // }

  async fetchPosts() {
    const response = await postsApi.get('/posts')
    console.log(response.data)
    this.setState({ posts: response.data })
  }

  render() {
    if (!this.state.posts) {
      return <div>Loading...</div>
    }

    return (
      Object.values(this.state.posts).map(post => (
        <div key={post.id} className="ui card">
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="meta">Time</div>
            <div className="description">
              <p>{post.content}</p>
            </div>
          </div>
          <CommentList postId={post.id} />
          <div className="extra content">
            <CommentCreate postId={post.id} />
          </div>
        </div>
      ))
    )
  }
}

export default PostList