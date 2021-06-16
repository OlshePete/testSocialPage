import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import PostDB from "./Post/PostDB"

const MyPosts = () => {
  return (
    <div>
        <Post postText="Hey, why everyone love me so much?"/>
        <Post postText="Как выровнять текст или блок по вертикали в CSS?"/>
        <Post postText="Как поместить по центру текст с display inline block?"/>
        <Post postText="Выравнивание полей формы с помощью CSS."/>
    
    </div>)
}

export default MyPosts;