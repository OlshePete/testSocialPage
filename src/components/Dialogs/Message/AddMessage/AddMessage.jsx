import React from 'react';
import s from "./AddMessage.module.css"

let newMessageElement = React.createRef();
const AddMessage = (props) => {


  let addMessage = () => {
    props.dispatch({type: "ADD-MESSAGE"});
  }
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({type: "UPDATE_NEW_MESSAGE_TEXT", newText: text});

  }

  return (
    <div className={s.content}>
      <div className={s.title}>Add new message</div>
      <div className={s.input}>
        <textarea ref={newMessageElement} onChange={onMessageChange} type="text" name="name" rows="4" value={props.newMessageText} /></div>
      <div className={s.button}><button onClick={addMessage} type="submit">Send</button>
      </div>
    </div>
  )
}

export default AddMessage;