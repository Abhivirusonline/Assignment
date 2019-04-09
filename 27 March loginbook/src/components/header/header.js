import React from 'react';
import {Link} from "react-router-dom";
import "../../App.css";
function Header(props) {
    return(
        <div className={"header"}>
            <h1>Book Store</h1>
            <nav>
                {console.log(props)}
                <Link className={"link"} to={"./books"}>Books</Link>
                {props.isAuth ? <Link  className="link" to="/logout">Logout</Link> : <Link  className="link" to="/login">Login</Link>}
            </nav>
        </div>
    );
}
export default Header;