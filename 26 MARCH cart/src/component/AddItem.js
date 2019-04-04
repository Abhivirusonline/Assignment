import React,{Component} from 'react';
import './AddItem.css';
class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            items:{}
        };
    }

    handleChange=(e)=>{
        let newItem={};
        let receivedValue=e.target.value;
        let spiltArr=receivedValue.split("-");
        newItem["itemName"]=spiltArr[0];
        newItem["itemPrice"]=spiltArr[spiltArr.length-1];
        this.setState({
           items:{
               ...this.state.items,
               ...newItem
           }
        });
    }
    render() {
        return(
            <div className={"AddItems"}>
                <form onSubmit={(e)=>this.props.handleAddItem(e,this.state.items)}>
                    <label>Item Name : </label>
                    <input type="text" value={this.state.items.name} name={"itemName"}
                           onChange={this.handleChange} placeholder={"Enter item and price separated by a - (hyphen)"} required/>
                    {/*<input type="submit" value={"Add Item to Cart"}/>*/}        {/*hide the submit button and work fine.*/}
                </form>
            </div>
        );
    }
}export default AddItem;