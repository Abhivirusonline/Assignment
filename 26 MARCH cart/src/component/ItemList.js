import React,{Component} from 'react';
import AddItem from './AddItem';
//import Item from './Item'
import SampleItem from './SampleItems';
//import RemoveItem from './removeItem';
import './cart.css';

class ItemList extends Component{
    constructor(props) {
        super(props);
        this.state={
            SampleItem:SampleItem,
        };
    }

    handleAddItem=(e,items)=> {
        e.preventDefault();
        console.log(items);
        let newItem = this.state.SampleItem.slice();
        let findItem = () => {
            let index = -1;

        newItem.forEach(element => {
            if (element.itemName === items.itemName)
                index = element.index;
         })
         return index;
        };
        let findItemIndex=findItem();
        if(findItemIndex===-1)
        {
            items.Qty=1;
            items.index=newItem.length;
            newItem.push(items);
            this.setState({
                SampleItem:newItem,
            });
        }
        else
        {
            this.handleIncrease(findItemIndex);
        }
    }
  handleDelete=(id)=>{
        let items=this.state.SampleItem;
        items.splice(id,1);
      this.setState({
            SampleItem:items
      })

    }
    handleDecrease=(index)=>{
        let tempItems=[...this.state.SampleItem];
        tempItems[index].Qty=tempItems[index].Qty-1;

        this.setState({
            SampleItem:tempItems
        })
    }
    handleIncrease=(index)=>{
        let tempItems=[...this.state.SampleItem];
        tempItems[index].Qty=tempItems[index].Qty+1;

        this.setState({
            SampleItem:tempItems
        })
    }
    getTotal=()=>{
        let tempItems=[...this.state.SampleItem];
        let newTotal=tempItems.reduce((accumulator,element)=>{
            return accumulator+=parseInt(element.itemPrice)*parseInt(element.Qty);
        },0);
return newTotal;
    }

    render() {
        return(
            <div className={"item-list"}>
                <h2>My Cart</h2>
                <AddItem handleChange={this.handleChange} handleAddItem={this.handleAddItem}/>
                <div className={"items"}>
                    <table>
                    {this.state.SampleItem.map((items,index)=>{
                        return(
                                <tr>
                                    <td>{items.itemName}</td> <td> {items.Qty}</td> <td>  {items.itemPrice}</td>
                                    <td> <i className="fas fa-minus" onClick={()=>this.handleDecrease(index)}></i></td>
                                    <td>  <i className="fas fa-plus" onClick={()=>this.handleIncrease(index)}></i></td>
                                    <td><i className="fas fa-times"  onClick={()=>this.handleDelete(index)}></i></td>
                                </tr>
                        );
                    })}
                    </table>
                </div>
                <div className={"total"}>
                 <h3>Total</h3>
                 <p>{this.getTotal()}</p>
                </div>
            </div>
        );
    }

}
export default ItemList;