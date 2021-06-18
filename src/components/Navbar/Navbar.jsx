import React from 'react';
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className={s.nav}>
      <div className={s.link}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
      <div className={s.link}><NavLink to="/dialogs"  activeClassName={s.activeLink}>Messages</NavLink></div>
      <div className={s.link}><NavLink to="/news"  activeClassName={s.activeLink}>News</NavLink></div>
      <div className={s.link}><NavLink to="/music"  activeClassName={s.activeLink}>Music</NavLink></div>
      <div className={`${s.link} ${s.settings}`}><NavLink to="/settings"  activeClassName={s.activeLink}>Settings</NavLink></div>
    </nav>
    )
}

export default Navbar;