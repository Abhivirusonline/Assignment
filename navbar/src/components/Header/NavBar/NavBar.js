import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar=(props)=>{
    return(
        <div className={"nav-bar"}>
            <Link to="/" onClick={props.handleClick}>Home</Link>
            <Link to="./about" onClick={props.handleClick}>About</Link>
            <Link to="/contact-us" onClick={props.handleClick}>Contact</Link>
        </div>

    );
}
export default NavBar;

