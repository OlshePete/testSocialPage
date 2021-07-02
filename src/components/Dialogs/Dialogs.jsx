import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessage from './Message/AddMessage/AddMessage';

const Dialogs = (props) => {

  let dialogsMembers = props.messagePage.dialogsData.map(d => (<DialogItem users={props.messagePage.dialogsData} id={d.id} />))
  let messageItems = props.messagePage.messagesDB.map(d => (<Message id={d.id} message={d.text}/>))

  return (
    <div className={s.dialogs}>

      <div className={s.dialogs_items}>
        {dialogsMembers}
      </div>
      <div className={s.messages}> 
        {messageItems}
      </div>
      <div></div>
      <AddMessage dispatch={props.dispatch} newMessageText={props.messagePage.newMessageText}/>
    </div>
  )
}

export default Dialogs;