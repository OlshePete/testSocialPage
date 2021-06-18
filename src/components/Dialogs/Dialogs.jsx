import React from 'react';
import s from './Dialogs.module.css'
import DialogsData from './DialogsDB'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = () => {
 let messages = [
   {id:0,text:"Hi, how are you?"},
   {id:1,text:"Hello, maybe cup of cofe?"},
   {id:2,text:"My lord, how old are you?"},
 ]

  let dialogsMembers = DialogsData.map(d => (<DialogItem id={d.id} />))
  let messageItems = messages.map(d => (<Message id={d.id} message={d.text}/>))

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