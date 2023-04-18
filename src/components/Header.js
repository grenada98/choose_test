import React from 'react';
import {Burger} from './Burger'

export const Header = (props) => {
    return(
        <header>
          <div className="header__wrapper">
            <a className="header__logo" href="#">
              <img src={process.env.PUBLIC_URL + '/img/logo.png'}alt="logo"/>
            </a>
            <div className="header__menu-wrapper">
              <nav className="header__menu">
                <a className="header__link" href="#">Clothes</a>
                <a className="header__link" href="#">Sneakers</a>
                <a className="header__link" href="#">Bags</a>
                <a className="header__link" href="#">Accessorize</a>
              </nav>
              <a className="header__buy">BUY</a>
            </div>
            <Burger active={props.active} setActive={props.setActive}/>
          </div>
        </header>
    )
}