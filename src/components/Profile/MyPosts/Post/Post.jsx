import React from 'react';
import s from "./Post.module.css"
import PostDB from "./PostDB"

const Post = (props) => {
    return (
        <div className={s.item}>
          <img src="./avatar.jpg" alt="ava"></img>
          <p>{props.postText}</p>
        </div>
    )
}

export default Post;