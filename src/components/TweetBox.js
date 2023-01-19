import React from 'react'
import './TweetBox.css'
import { Button } from '@mui/material'
import { Avatar } from '@mui/material';

function TweetBox() {
  const [twee]
  return (
    <div className='tweetBox'>
        <form>
        <div className = "tweetBox__input">
                    <Avatar
                        src = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    />
                     <input 
                        // onChange = {(e) => setTweetMessage(e.target.value)}
                        // value = {tweetMessage} 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
        </div>
        <input 
                    // onChange = { (e) => setTweetImage(e.target.value) }
                    // value = {tweetImage}
                    className = "tweetBox__imageInput"
                    placeholder = "Optional : Enter Image URL"
                    type = "text"
                />
               <Button 
                // onClick = { sendTweet }
                className = "tweetBox__tweetButton">Tweet</Button> 
        </form>
    </div>
  )
}

export default TweetBox
