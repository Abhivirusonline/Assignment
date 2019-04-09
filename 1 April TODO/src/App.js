import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,

} from "react-router-dom";

import TodoManagerStyled from './components/containers/TodoManager/TodoManager';
import LogOut from "./components/logout/logout";
import LogIn from "./components/login/login";
import HeaderStyled from "./components/header/header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            username: "admin",
            password: "admin"
        };
    }

    handleSubmit = (event, item) => {
        event.preventDefault();
        const { username, password } = this.state;

        if (item.username === username && item.password === password) {
            this.setState({
                isAuthenticated: true
            });
        } else {
            this.setState({
                isAuthenticated: false
            });
        }
    };

    toggleAuthentication = () => {
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        });
    };

    render() {
        return (
            <Router>
                <HeaderStyled isAuthenticated={this.state.isAuthenticated} />

                <Route
                    exact
                    path="/"
                    render={() => <p>Todo List display here </p>}
                />

                <PrivateComponent
                    path="/todos"
                    isAuthenticated={this.state.isAuthenticated}
                    component={TodoManagerStyled}
                />


                <Route
                    path="/login"
                    component={path => (
                        <LogIn
                            handleSubmit={this.handleSubmit}
                            isRedirected={path}
                            isAuthenticated={this.state.isAuthenticated}
                        />
                    )}
                />
                <Route
                    path="/logout"
                    component={() => (
                        <LogOut
                            toggleAuthentication={this.toggleAuthentication}
                            isAuthenticated={this.state.isAuthenticated}
                        />
                    )}
                />
            </Router>
        );
    }

}

export default App;
const PrivateComponent = ({
                              component: Component,
                              isAuthenticated,
                              ...rest
                          }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: isAuthenticated
                        }}
                    />
                )
            }
        />
    );
};