import React from 'react';
import s from "./AddPosts.module.css"

const AddPosts = () => {
  return (
    <div className={s.content}>
      <div className={s.title}>Add new post</div>
      <div className={s.input}><textarea type="text" name="name" rows="4" placeholder="your news..." /></div>
      <div className={s.button}><button type="submit">Send</button>
      </div>
    </div>
  )
}

export default AddPosts;