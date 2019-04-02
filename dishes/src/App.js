import React, { Component } from 'react';
import './App.css';
import Menu from "./component/menu";

class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Menu className={"Menu"}/>
        );
    }

}

export default App;
