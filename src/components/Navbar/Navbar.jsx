import React from 'react';
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
      <nav className={s.nav}>
      <div className={s.link}><a src="">Profile</a></div>
      <div className={s.link}><a src="">Messages</a></div>
      <div className={s.link}><a src="">News</a></div>
      <div className={s.link}><a src="">Music</a></div>
      <div className={`${s.link} ${s.settings}`}><a src="">Settings</a></div>
    </nav>
    )
}

export default Navbar;