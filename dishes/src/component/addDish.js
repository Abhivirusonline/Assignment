import React,{Component} from 'react';
import '../App.css';
class AddDish extends Component{
    constructor(props){
        super(props);
    this.state={
        dish:{}
    }
    }
    handleChange=(e)=>{
        let newDish={};
        newDish[e.target.name]=e.target.value;
        this.setState({
           dish:{
               ...this.state.dish,
               ...newDish
           }
        });
    }
    render() {
        return(
            <div className={"AddDish"}>
                <form onSubmit={(e)=>this.props.handleAddDish(e,this.state.dish)}>
                    <label>Name : </label>
                    <input type="text" value={this.state.dish.name} name={"name"} onChange={this.handleChange} required/>
                    <label>Description</label>
                    <input type="text" value={this.state.dish.description} name={"description"} onChange={this.handleChange} required />
                    <label>Price :: </label>
                    <input type="text" value={this.state.dish.value} name={"price"} onChange={this.handleChange} required />
                    <label>Status</label>
                    <input type="text" value={this.state.dish.status} name={"status"} onChange={this.handleChange} placeholder={"Available or Not Available"} required />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default AddDish;