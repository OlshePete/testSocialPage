import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import s from "./AddPosts.module.css"

const AddPosts = (props) => {


  let addPost = () => {
    props.dispatch(addPostCreator());
  }
  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextCreator(text));
  }

  return (
    <div className={s.content}>
      <div className={s.title}>Add new post</div>
      <div className={s.input}>
        <textarea onChange={onPostChange} type="text" name="name" rows="4" value={props.newPostText} placeholder="Enter your news here"/></div>
      <div className={s.button}><button onClick={addPost} type="submit">Send</button>
      </div>
    </div>
  )
}

export default AddPosts;