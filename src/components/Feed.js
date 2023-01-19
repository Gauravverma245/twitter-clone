import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import axios from 'axios'


function Feed() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([])

  
  // function getData() {
  //   axios.get("https://tweets.free.beeceptor.com/tweets/all")
  //   .then((res) => {
  //     setPosts(res.data.data) // array of posts
  //     setUsers(res.data.includes.users) // array of users
  //   })
  // }

  // useEffect(() => {
  //   getData();
  // },[]);

  // let res = users.map((user, i) => Object.assign({}, user, posts[i]));
  // setResults(res)

  const deletePost = (id) => {
    const updatedResult = results.filter((res) => {
      return res.id !== id
    })
    setResults(updatedResult)
 }

 const createPost = (tweetMessage) => {
  const updatedResult = [{id: Math.round(Math.random() * 1000 + 1), name: "user1", username:"username", text:tweetMessage}, ...results]
  setResults(updatedResult)
}

  const editPost = (postId, text) => {

  }

  const data = results.map((res) => {
    return <Post  key={res.id} postId={res.id} name={res.name} username={res.username} text={res.text} onDelete={deletePost} />
  })


  


  return (
    <div className='feed'>
        <div className='feed__header'>
        <h2>Home</h2>
        </div>
      {/* Home */}
      <TweetBox onCreate={createPost}/>
      {/* TweetBox */}
      {data}
     {/* Posts */}
    </div>
  )
}

export default Feed
