// /* global doc */
import { Avatar } from '@material-ui/core'
import React, { forwardRef, useEffect, useState } from 'react'
import "./Post.css"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import { ChatBubbleOutline, FavoriteBorder, DeleteOutlined, Repeat } from '@material-ui/icons'
import db from "./firebase";
import { toast, ToastContainer } from 'react-toastify';
// import firebase from "firebase";

//Pass some arguments as props
const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    id
}, ref) => {

    // const [allDocs, setAllDocs] = useState([]);
    // const db = firebase.firestore()
    const [singleDoc, setsingleDoc] = useState({});

    // function fetchAll() {
    //     db.collection('posts')
    //         .get()
    //         .then((snapshot) => {
    //             if (snapshot.docs.length) {
    //                 snapshot.docs.forEach((doc) => {
    //                     setAllDocs((prev) => {
    //                         return [...prev, { data: doc.data(), id: doc.id }];
    //                     });
    //                 });
    //             }
    //         });
    // }
    const fetchSingle = e =>{
        // e.preventDefault();
        db.collection('posts')
        .doc("8AcD8Zrjy43I6tBUJh8M")
        .get()
        .then((snapshot)=>{
            if(snapshot){
                setsingleDoc(snapshot.data());
            }
        });
    }
    useEffect(() => {
        // fetchAll();
        ///fetchSingle();
    }, []);

    const deleteDoc = (event) => {
        // id.preventDefault();
        console.log("id")
        db.collection('posts').doc(id).delete()
            .then(() => {
                toast.success("tweet successfully deleted!");
            }).catch((error) => {
                toast.error("Error removing tweet: ", error);
            });
    }

    // const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

    // const docs = posts.docs.map((post) => ({
    //     id: post.id,
    //     ...post.data(),
    //     timestamp: null,
    // }));



    return (


        <div className="post" ref={ref}>

            <ToastContainer />

            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">

                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName} {" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />} {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img src={image} alt="" />
                {/* { */}
                    {/* // allDocs.map((doc) => ( */}
                       
                        <div className="post__footer">
                            <ChatBubbleOutline fontSize="small" />
                            <Repeat fontSize="small" />
                            <FavoriteBorder fontSize="small" />
                            {/* <DeleteOutlined onClick={() => { deleteDoc(doc.id) }} fontSize="small" /> */}
                            <DeleteOutlined id={id} onClick={ deleteDoc } fontSize="small" />
                        </div>
                        
                        

                    {/* ))
                } */}

            </div>

        </div>


    )
});

export default Post
