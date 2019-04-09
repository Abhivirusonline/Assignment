import React, { Component } from "react";
import AuthContext from "./AuthContext";
import InjectAuth from "./InjectAuth";

class ChildComp extends Component {
    render() {
        return (
            <div>
                <h1>child component</h1>
                <h1>
                    {" "}
                    where user is authenticated:{" "}
                    {this.props.isAuth.toString()}
                </h1>
            </div>
        );
    }
}
export default InjectAuth(ChildComp);
