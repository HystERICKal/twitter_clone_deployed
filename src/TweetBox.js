import React, { useState } from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core";
import db from "./firebase";

 function TweetBox() {
    //Two pieces of state, to keep track of what user is posting
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    //tweet button
    const sendTweet = async e => {
        //prevent page from refreshing everytime you tweet
        e.preventDefault();

        //post to database
        let id = await db.collection('posts').add({
            displayName: 'Erick Nyoro',
            username: '@erick_nyoro',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://lh3.googleusercontent.com/ogw/ADea4I5OeipD_9Tk2q7g6xvEcQ9COoxpNybCVOLG69Gn7g=s32-c-mo",
        });
        console.log(id)

        //remove tweet and image from input fields after post
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        // Tweetbox is that whole area with TweetBox, avatar and text input area        
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar 
                        src="https://lh3.googleusercontent.com/ogw/ADea4I5OeipD_9Tk2q7g6xvEcQ9COoxpNybCVOLG69Gn7g=s32-c-mo"
                    />
                    <input
                    // onchange fires off an event every time you type
                    onChange = {e => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text"/>
                    
                </div>

                <input 
                onChange = {e => setTweetImage(e.target.value)}
                value={tweetImage} 
                className="tweetBox__imageInput"
                placeholder="Enter Image url" 
                type="text"
                />

                <Button onClick={ sendTweet } type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
