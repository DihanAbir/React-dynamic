import React from 'react';
import './SingleComment.css';
import Image from '../Image/Image';
import Box from '@material-ui/core/Box';

const SingleComment = (props) => {
    const {id, body, name, email } = props.name;
    // console.log(props)
    return (
        <Box  className="comment " display="flex">
            <Box className="cardMedia" borderRadius="50%" >
                <Image></Image>
            </Box>
            <div className="commentsection">
                <h3>Name: {name}</h3>
                <p>{body}</p>
                <strong>Email: {email}</strong>
            </div>
        </Box>
    );
};

export default SingleComment;