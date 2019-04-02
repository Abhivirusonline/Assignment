import React,{Component} from 'react';
import '../App.css';
const Dish=(props)=>{
    function handleClick() {
        console.log(props.dish.price);
    }
    return(
        <div className={"dish-card"} onClick={handleClick}>
                <h3>{props.dish.name}</h3>
                <h4>Price : {props.dish.price}</h4>
            <p><strong>Description :</strong> {props.dish.description}</p>
                <p><strong>Availability : </strong>{props.dish.status}</p>
        </div>
    );
}
export default Dish;