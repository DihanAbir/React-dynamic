import React, { useEffect, useState } from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Image from '../Image/Image';

const Post = (props) => {
    const { userId, id, title, body  } = props.post;
    // console.log(props.post)  

    return (
        <div className="post">
            <div>
                <img src="" alt=""/>
            </div>
            {
               <Image></Image>
            }
            <p> User id: {userId}</p>
            <p> Title: {title}</p>
            <p> Content: {body}</p>
            <Button variant="contained" color="Secondary">
            <Link className="link" to={`/post/${id}`} >Comments</Link> 
                </Button>
        </div>
    );
};

export default Post;