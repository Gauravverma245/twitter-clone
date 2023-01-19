import React from 'react'
import './Post.css'
import PostEdit from './PostEdit'
import { Avatar } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from 'react'


const Post = ({ postId, name, username, text, onDelete, onUpdate }) => {
    const [showForm, setSetForm] = useState(false);

    const deleteHandler = (e) => {
        e.preventDefault();
        onDelete(postId)
    }

    // const updateHandler = (e) => {
    //     e.preventDefault();
    //     console.log("clicked");
    //     setSetForm(true)
    //     // onUpdate(postId, text)
    // }

    return (
        <div className = "post" >
            <div className = "post__avatar">
                <Avatar 
                    src ="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        {name}
                            <span className = "post__headerSpecial">
                                @{username}
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                {showForm && <PostEdit/>}
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "small" /> 
                    <RepeatIcon fontSize = "small" />
                    <EditIcon fontSize='small'/>
                    <DeleteIcon onClick={deleteHandler} fontSize='small'/>
                </div>
            </div>    
        </div>
    )
}

export default Post