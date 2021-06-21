import React from 'react';
import s from "./AddPosts.module.css"

let newPostElement = React.createRef();
const AddPosts = (props) => {
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value="";
  }
  return (
    <div className={s.content}>
      <div className={s.title}>Add new post</div>
      <div className={s.input}><textarea ref={newPostElement} type="text" name="name" rows="4" placeholder="your news..." /></div>
      <div className={s.button}><button onClick={addPost} type="submit">Send</button>
      </div>
    </div>
  )
}

export default AddPosts;