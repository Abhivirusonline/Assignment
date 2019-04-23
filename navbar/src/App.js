import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            base_url:'http://127.0.0.1:5000/',
            pathname:'',
            content:'',
            loading:true
        };
    }

    handleData=()=>{
        let {base_url,pathname}=this.state;
        let pathobj=base_url+pathname;
        fetch(pathobj)
            .then(res=>{
                return res.text();
            })
            .then(result=>{
                this.setState({
                    content:result,
                    loading:false
                })
            })
            .catch(err=>{
                console.log("error is fetch :"+err)
            });
    }
    handleClick=(e)=>{
    this.setState({
        pathname:e.target.text,
        content:'',
        loading:true
    },
        this.handleData
    )
    }
  render() {
        let data;
        if(this.state.loading)
            data=<Loader/>
      else
          data=ReactHtmlParser(this.state.content)
    return (
      <div className="App">
        <Router>
            <Header handleClick={this.handleClick}/>
             {data}
        </Router>
      </div>
    );
  }
}

export default App;


