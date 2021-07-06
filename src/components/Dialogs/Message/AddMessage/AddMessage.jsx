import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../../redux/dialogsReducer';
import s from "./AddMessage.module.css"

const AddMessage = (props) => {


  let addMessage = () => {
    props.dispatch(addMessageCreator());
  }
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextCreator(text));

  }

  return (
    <div className={s.content}>
      <div className={s.title}>Add new message</div>
      <div className={s.input}>
        <textarea onChange={onMessageChange} type="text" name="name" rows="4" value={props.newMessageText} placeholder="Enter your message" /></div>
      <div className={s.button}><button onClick={addMessage} type="submit">Send</button>
      </div>
    </div>
  )
}

export default AddMessage;