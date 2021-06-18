import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
          <img src="./avatar.jpg" alt="ava"></img>
          <p>{props.disription}</p>
          <div className={s.like}>{props.likes} like it</div>
        </div>
    )
}

export default Post;