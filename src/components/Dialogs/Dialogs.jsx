import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogsMembers = props.users.map(d => (<DialogItem users={props.users} id={d.id} />))
  let messageItems = props.messagesList.map(d => (<Message id={d.id} message={d.text}/>))

  return (
    <div className={s.dialogs}>

      <div className={s.dialogs_items}>
        {dialogsMembers}
      </div>
      <div className={s.messages}> 
        {messageItems}
      </div>
    </div>
  )
}

export default Dialogs;