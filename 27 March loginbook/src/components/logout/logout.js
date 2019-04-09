import React from 'react';
import {Redirect} from "react-router-dom";

function Logout(props) {
    if(props.isAuth)
    {
        return (
            <div>
                {props.logout()}
                <h1>Logout Component</h1>
                <Redirect to={"/login"}/>
            </div>
        );
    }
}
export default Logout;