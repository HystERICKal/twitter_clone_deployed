import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox"
import Post from "./Post"
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
    //useState([]) is a hook and it prepares the variable. default value is an empty array
    const [posts, setPosts] = useState([]);
    // const snaps=[]
    //runs based on a given condition
    //run when the feed component loads, and don't run it again after
    useEffect(() => {
        //snapshot gives us a picture of the database immediately it changes
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => { 
                return {data: doc.data(), id: doc.id }
            } ))
            console.log(snapshot.docs[0].data())
        })
    }, []);

    
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
               
            </div>
            
            {/* TweetBox */}
            <TweetBox />    

            {/* Posts */}
            {/* Coming from firebase now */}
            {/* FlipMove helps animate the posts */}
            <FlipMove>
                
                {posts.map( post => (
                    <Post 
                    key = {post.data.text} //in future pull post ID from firebase and use that##################################################
                    displayName={post.data.displayName}
                    username={post.data.username}
                    verified={post.data.verified}
                    text={post.data.text}
                    image={post.data.image}
                    avatar={post.data.avatar}
                    id={post.id}
                />
                ))}
            </FlipMove>
            {/* <Post /> */}

        </div>
    )
}

export default Feed
