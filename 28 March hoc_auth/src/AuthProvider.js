import AuthContext from './AuthContext';
import React,{Component} from 'react';

class AuthProvider extends Component{
    render(){
        return (
            <AuthContext.Provider value={{isAuth:true}}>

                {this.props.children}

            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;
