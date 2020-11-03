import React from 'react'
import PostCreate from './Posts/PostCreate'
import PostList from './Posts/PostList'

const appStyle = {
  padding: '15px'
}

function App() {
  return (
    <div className="ui container" style={appStyle}>
      <h1 className="ui header">Create a Post</h1>
      <PostCreate />
      <hr />
      <h1 className="ui header">Post List</h1>
      <div className="ui grid">
        <div className="four wide column">
          <PostList />
        </div>
      </div>
    </div>
  )
}

export default App