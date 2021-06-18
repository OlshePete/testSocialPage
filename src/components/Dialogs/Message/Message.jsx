import React from 'react';
import s from './../Dialogs.module.css'

const Message = function (props) {
  return (
    <div className={s.message}>{props.message}</div>
  );
}

export default Message;