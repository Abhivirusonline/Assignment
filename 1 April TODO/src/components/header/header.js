import React from 'react';
import {Link} from "react-router-dom";
import "../../App.css";
function Header(props) {
    return(
        <div className={"header"}>
            <h1>TODOS</h1>
            <nav>
                {props.isAuth ? <Link  className="link" to="/logout">Logout</Link> : <Link  className="link" to="/login">Login</Link>}
            </nav>
        </div>
    );
}
export default Header;