import React, { Component } from 'react';
import './App.css';
import StudentCom from "./components/StudentComp/StudentComp";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users_list:[],
      filter:"All Students",
      url:"http://127.0.0.1:5000/students"
    };
    this.handleSearch(this.state.url);
  }
  handleSearch=(query)=>{
    fetch(query,{
      method:"GET",
    }).then( res=> {
      return res.json()
    })
        .then(result=>{
          this.setState({
            users_list:result
          }
          );
        })
        .catch(err=>{
          console.log("error in catch block",err);
        });
  }
  handleData=()=>{
      this.clearUser();
      this.handleSearch(this.state.url+"?branch="+this.state.filter);
  }
  handleChange=(e)=>{
      this.setState({
        filter:e.target.value
      },
          this.handleData
      )
  }

  clearUser=()=>{
    this.setState({
      users_list:[]
    });
  };

  render() {
    return (
      <div className="App">
        <select className={"filter"} onChange={this.handleChange}>
          <option>All Students</option>
          <option>CSE</option>
          <option>CE</option>
          <option>ME</option>
          <option>EC</option>
          <option>EN</option>
          <option>MCA</option>
        </select>
        <StudentCom
            users_list={this.state.users_list}
        />
      </div>
    );
  }
}

export default App;
