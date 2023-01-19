import React from 'react'
import './Post.css'
import {forwardRef} from 'react'
import { Avatar } from '@mui/material'
import PublishIcon from '@mui/icons-material/Publish';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import VerifiedIcon from '@mui/icons-material/Verified'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


const  Post = forwardRef(
    ({
        displayName,
        username,
        verified, 
        text, 
        image, 
        avatar
}, ref) => {
    return (
        <div className = "post" ref={ref}>
            <div className = "post__avatar">
                <Avatar 
                    src = {avatar}
                />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        {displayName}
                            <span className = "post__headerSpecial">
                                {verified && <VerifiedIcon className = "post__badge" />}
                                @{username}
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img 
                    src = {image}
                    alt = ""
                />
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "small" /> 
                    <RepeatIcon fontSize = "small" />
                    <FavoriteBorderIcon fontSize = "small" />
                    <PublishIcon  fontSize = "small" /> 
                </div>
            </div>    
        </div>
    )
})

export default Post