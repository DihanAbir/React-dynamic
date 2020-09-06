import React, { useState,useEffect } from 'react';
import './Image.css';


const Image = () => {

    const [image, setImage] = useState([])
    useEffect(() =>{
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data =>{
            data = data.results[0].picture.large
            setImage(data)
        })
        
    }, [])
    
    console.log(setImage)



    console.log( image )

    return (
        <div>
           
            <img src={image} alt="Please Reload  picture"/>
        </div>
    );
};

export default Image;