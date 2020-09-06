import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import TabPanel from '../TabPanel/TabPanel';
import Header from '../Header/Header';

const Home = () => {

    const [ post, setPost ] = useState([])

    const url = "https://jsonplaceholder.typicode.com/posts";
    useEffect( () => {
      fetch(url)
      .then( res => res.json())
      .then (data => {
        setPost(data);
      })
    }, [])
  
    return (
        <div>
           {/* <TabPanel></TabPanel> */}
           <Header></Header>
        {
            post.map(post => <Post
            key = {post.id}
            post={post} 
            ></Post>)
        }
        </div>
    );
};

export default Home;