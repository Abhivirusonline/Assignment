import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import BookManager from './components/containers/BookManager/BookManager';
import BookDetail from './components/BookDetail/BookDetail';
import Logout from './components/logout/logout';
import Header from './components/header/header';
class App extends Component {
  constructor(){
    super();
    this.state={
      username:"admin",
      password:"admin",
      isAuth:false,
    }
  }
  handleSubmit=(event,EnteredState)=>{
    event.preventDefault();
    const {username,password}=this.state;
    if(EnteredState.username===username && EnteredState.password===password){
      this.setState({
        isAuth:true
      })
    }
    // else
    // {
    //   this.setState({
    //     isAuth:false
    //   });
    // }
  }
  logout=()=>{
      this.setState({
          isAuth:false
      })
  }
  render() {
    return (
        <Router>
          <Header isAuth={this.state.isAuth} />
          <Route
              exact
              path="/"
              render={() => <p>home page content would be displayed here </p>}
          />

          <PrivateComponent
              path="/books"
              isAuth={this.state.isAuth}
              component={BookManager}
          />

          <PrivateComponent
              path="/book-detail"
              isAuth={this.state.isAuth}
              component={BookDetail}
          />

          <Route
              path="/login"
              component={path => (
                  <Login
                      handleSubmit={this.handleSubmit}
                      isRedirected={path}
                      isAuth={this.state.isAuth}
                  />
              )}
          />
          <Route
              path="/logout"
              component={() => (
                  <Logout
                      logout={this.logout}
                      isAuth={this.state.isAuth}
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
                            isAuth,
                            ...rest
                          }) => {
  return (
      <Route
          {...rest}
          render={props =>
              isAuth ? (
                  <Component {...props} />
              ) : (
                  <Redirect
                      to={{
                        pathname: "/login",
                        state: isAuth
                      }}
                  />
              )
          }
      />
  );
};
