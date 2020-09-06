import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleComment from '../component/SingleComment/SingleComment';
import './PostDetails.css'

const PostDetails = () => {
    const { postId } = useParams();
    const [ comment, setComment ] = useState([]);
    const [ postOwner, setPostOwner ] = useState([]);
    // console.log(postOwner)

    // finding all cmments under posts
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then( response => response.json())
        .then(data => {
            // data.forEach(comment => {  
            //     // console.log(comment)
            //     setComment(comment)
            // });
                setComment(data)
        });
    }, []);

// for finding main post
useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then( response => response.json())
    .then(data => {
        // data.forEach(comment => {  
        //     // console.log(comment)
        //     setComment(comment)
        // });
        setPostOwner(data)
    });
}, []);
    return (
        <div>
            <div className="mainpost">
                <small>ID: {postOwner.id}</small>
                <p className="title"> <strong>Title</strong>: {postOwner.title}</p>
                <p>Body: {postOwner.body}</p>
            </div>
            {
                comment.map(comment => <SingleComment 
                id = {comment.id}
                name= {comment}
                ></SingleComment> )
            }
            
        </div>
    );
};

export default PostDetails;