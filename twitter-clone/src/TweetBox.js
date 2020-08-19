import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={PersonIcon}/>
                    <input placeholder="What's happening?"/>
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
