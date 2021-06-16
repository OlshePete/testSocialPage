import React from 'react';
import s from "./PersonTemplate.module.css"

const PersonTemplate = () => {
    return (
    <div className={s.person_template}>

      <div className={s.person_template+"__img"}><img src="./avatar.jpg" alt="ava"></img></div>
      
        <div className={s.info} >
          <div className={s.nick_name} >Olshevskii Peter</div>
          <div className={s.item}>Date of birth: 7 january 1991</div>
          <div className={s.item}>City: Russia, Saint-Petersburg</div>
          <div className={s.item}>Education: SpbSTU-2018</div>
          <div className={s.item}>Web Site: http://sts90.ru</div>
        </div>
      </div>
    
    )
}

export default PersonTemplate;