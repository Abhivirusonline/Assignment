import React from 'react';
import './cart.css';
//import RemoveItem from './removeItem';

const handleDelete=(idd)=>{
    alert(idd);
}
const Item=(props)=>{
    return(
        <div className={"items1"}  >
            <div>
                {props.items.itemName}
            </div>
            <div>
                1
            </div>
            <div>
                {props.items.itemPrice}
            </div>
            <div>
                <i className="fas fa-minus"></i>
            </div>
            <div>
                <i className="fas fa-plus"></i>
            </div>
            <div>
                <i className="fas fa-times" id={props.id} onClick={()=>handleDelete(props.id)}></i>
            </div>

        </div>
    );
}
export default Item;