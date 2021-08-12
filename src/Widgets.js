import React from 'react'
import "./Widgets.css"
import {
    TwitterShareButton,
    TwitterTimelineEmbed,
    // TwitterTimelineEmbed,
    // TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from '@material-ui/icons';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon"/>
                    <input placeholder="Search Twitter" type="text" />
                
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1355457674226368512"}/>
                <TwitterTimelineEmbed 
                    screenType="profile"
                    screenName="TuksConfession3"
                    options={{ height:400 }}
                />
                <TwitterShareButton 
                    url={"https://facebook.com/twitter"}
                    options={{text: "twitter is awesome!", via: "twitter"}}
                
                />
            </div>
        </div>
    )
}

export default Widgets
