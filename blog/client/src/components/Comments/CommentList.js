import React, { Component } from 'react'
import { commentsApi } from '../../apis'

class CommentList extends Component {
  state = {
    comments: []
  }

  componentDidMount() {
    this.fetchComments(this.props.postId)
  }

  componentDidUpdate(prevState) {
    if (prevState.comments !== this.state.comments) {
      this.fetchComments(this.props.postId)
    }
  }

  async fetchComments(postId) {
    const response = await commentsApi.get(`/posts/${postId}/comments`)
    this.setState({ comments: response.data })
  }

  render() {
    const { comments } = this.state

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
}

export default CommentList