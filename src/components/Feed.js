import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import axios from 'axios'


function Feed() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  
  function getData() {
    axios.get("https://tweets.free.beeceptor.com/tweets/all")
    .then((res) => {
      setPosts(res.data.data)
      setUsers(res.data.includes.users)
    })
  }

  useEffect(() => {
    getData();
  },[]);

  let results = users.map((user, i) => Object.assign({}, user, posts[i]));
  const data = results.map((res) => {
    return <Post key={res.id} name={res.name} username={res.username} text={res.text}/>
  })



  return (
    <div className='feed'>
        <div className='feed__header'>
        <h2>Home</h2>
        </div>
      {/* Home */}
      <TweetBox/>
      {/* TweetBox */}
      {data}
     
    </div>
  )
}

export default Feed
