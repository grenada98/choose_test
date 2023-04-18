import React from "react";
import {Burger} from './Burger'

export const MobileMenu = (props) => {

    return(
        <div className={props.active?"mobile active":"mobile"}>
            <Burger active={props.active} setActive={props.setActive}/>
            <nav>
                <a className="mobile__link" href="#">Clothes</a>
                <a className="mobile__link" href="#">Sneakers</a>
                <a className="mobile__link" href="#">Bags</a>
                <a className="mobile__link" href="#">Accessorize</a>
            </nav>
            <a className="mobile__buy">BUY</a>
        </div>
    )
}