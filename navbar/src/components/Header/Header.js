import React from "react";
import NavBar from "./NavBar/NavBar";

const Header=(props)=>{
    return(
        <NavBar handleClick={props.handleClick}/>
    );
}
export default Header;