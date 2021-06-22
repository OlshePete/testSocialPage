import React from 'react';
import s from "./AddPosts.module.css"

let newPostElement = React.createRef();
const AddPosts = (props) => {


  let addPost = () => {
    props.dispatch({type: "ADD-POST"});
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text});

  }

  return (
    <div className={s.content}>
      <div className={s.title}>Add new post</div>
      <div className={s.input}>
        <textarea ref={newPostElement} onChange={onPostChange} type="text" name="name" rows="4" value={props.newPostText} /></div>
      <div className={s.button}><button onClick={addPost} type="submit">Send</button>
      </div>
    </div>
  )
}

export default AddPosts;