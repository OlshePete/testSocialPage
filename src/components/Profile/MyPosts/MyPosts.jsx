import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {
let postsElements = props.posts.map(d => (
  <Post key={d.id} id={d.id} disription={d.disription} likes={d.likes}/>)
)
return (
    <div className={s.wrapper}>
      {postsElements}
    </div>
  )
}
export default MyPosts;