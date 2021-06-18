import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";
// import DialogsData from '../../../index.js'
import DialogsData from './../DialogsDB'

const DialogItem = function (props) {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} >{DialogsData[props.id].name}</NavLink>
    </div>
  );
}

export default DialogItem;