import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton
} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"></input>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId ={"1296188681816911872"}/>
                <TwitterTimelineEmbed
                    sourceType={"profile"}
                    screenName="AbdolHumzah"
                />
                <TwitterShareButton
                    url={"humzahabdol.com"}
                    options={{ text: "What Humzah created this????", via: "AbdolHumzah"}}
                />
            </div> 
        </div>
    );
}

export default Widgets
