import React,{Component} from 'react';
import DishList from './DishList';
import '../App.css'
const Menu=(props)=>{
    return(
        <div className={"menu"}>
            <h1>Menu</h1>
            <DishList/>
        </div>
    )
}
export default Menu;