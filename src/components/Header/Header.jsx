import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <header className={s.header}>
       <NavLink to="/profile"> <img src='/logo.png' alt="logoApp"/>
      </NavLink>
      </header>
    )
}

export default Header;