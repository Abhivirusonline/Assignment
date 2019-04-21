import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/searchbar/searchbar";
class App extends Component {
constructor(props){
  super(props);
  this.state={
    isLoaded:false,
    users_list:[]
  }
}

handleSearch=(query)=>{
      fetch(query,{
        method:"GET",
      }).then( res=> {
        return  res.json()
        })
          .then(result=>{
            this.setState({
              users_list:result
            });
          })
          .catch(err=>{
            console.log("error in catch block",err);
          });
    }

clearUser=()=>{
    this.setState({
        users_list:[]
    });
};

render() {
    return (

      <div className="App">
          <SearchBar
              handleSearch={this.handleSearch}
              users_list={this.state.users_list}
              clearUser={this.clearUser}
          />
      </div>
    );
  }
}

export default App;
