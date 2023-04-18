import React, { useState } from "react";

export const Burger = (props) => {
    function onHandle(){
        props.setActive(!props.active)
    }
    return(
        <div className={props.active?"burger__button active":"burger__button"} onClick={onHandle}>
            <div className="burger__line"></div>
        </div>
    )
}