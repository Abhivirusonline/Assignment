import React,{Component} from 'react';
import { Redirect} from 'react-router-dom';
import "../../App.css";

class Login extends Component{
    constructor(props){
            super(props);
        this.state={
            username:"",
            password:""
        };
    }
    handleChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        });
    };

    render() {
        const {isAuth,handleSubmit}=this.props;
        if(isAuth)
        {
            return <Redirect to={"/books"}/>
        }
        return(
            <div>
                <form className={"LoginForm"} onSubmit={event=>handleSubmit(event,this.state)}>
                    <div>
                        <h3>Login</h3>
                        <label>Username</label> <br/>
                        <input type="text" value={this.state.username} onChange={this.handleChange} name={"username"} placeholder={"Admin"}/>
                    </div>
                    <div>
                        <label>Password</label> <br/>
                        <input type="password" value={this.state.password} onChange={this.handleChange} name={"password"} placeholder={"Admin"}/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        );
    }

}

export default Login;