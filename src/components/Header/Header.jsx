import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
      <header className={s.header}>
        <img src='./logo.png' alt="logoApp"/>
      </header>
    )
}

export default Header;