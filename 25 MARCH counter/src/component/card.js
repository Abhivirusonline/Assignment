import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="Card">
                <label>{this.props.data.name}</label>
                <span>{this.props.data.counter}</span>
                <button onClick={()=>this.props.handleIncrease(this.props.data.index)}>+</button>
                <button onClick={()=>this.props.handleDecrease(this.props.data.index)}>-</button>

            </div>
        )
    }
}
export default Card;