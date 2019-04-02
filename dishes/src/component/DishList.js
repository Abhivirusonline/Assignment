import React,{Component} from 'react';
import AddDish from './addDish';
import SampleDish from './SampleDishes';
import Dish from './Dish';
import '../App.css';

export class DishList extends Component{
    constructor(props){
        super(props);
        this.state={
            SampleDish:SampleDish,
        };
    }
    handleAddDish=(e,dish)=>{
        e.preventDefault();
        console.log(dish);
        let newSample=this.state.SampleDish.slice();
        newSample.push(dish);
        this.setState({
            SampleDish:newSample
        })
    }
    render() {
        return(
            <div className={"dish-list"}>
                <div className={"dishes"}>
                    {this.state.SampleDish.map((dish,index)=>{
                        return(<Dish dish={dish} key={index}/>);
                    })}
                </div>
                <h2>Add DISH</h2>
                <AddDish handleChange={this.handleChange} handleAddDish={this.handleAddDish}/>
            </div>
        );
    }
}
export default DishList;