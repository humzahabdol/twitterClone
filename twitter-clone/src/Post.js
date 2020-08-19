import React from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={AccountCircleIcon}></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Humzah Abdol <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge"/> @huabdol
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone with React</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/dyurnr89XDS64mwV9f/giphy.gif"
                alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
