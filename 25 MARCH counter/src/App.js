import React, { Component } from 'react';
import Card from './component/card';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          counters:[
              {name:"counter 1",counter:0, index:0},
              {name:"counter 2",counter:0, index:1},
              {name:"counter 3",counter:0, index:2}
          ]
        };
    }
    handleIncrease=(index)=>{
        const newCounters=this.state.counters.map(element=>{
            if(element.index===index){
                element.counter+=1;
                return element;
            }
            return element;
        });
        this.setState({
            counters:newCounters
        });
    };

 handleDecrease=(index)=>{
     const newCounters=this.state.counters.map(element=>{
         if(element.index===index){
             element.counter-=1;
             return element;
         }
         return element;
     });
     this.setState({
         counters:newCounters
     });
 }
    increaseAll=()=>{
     const newCounters=this.state.counters.map(element=>{
         element.counter+=1;
         return element;
     });
        this.setState({
            counters:newCounters
        });
    };
    decreaseAll=()=>{
        const newCounters=this.state.counters.map(element=>{
            element.counter-=1;
            return element;
        });
        this.setState({
            counters:newCounters
        });
    };
    render() {
    return (
        <div className="App">
            <h2>Counter</h2>
            <div className="counters">
                {this.state.counters.map((element,index)=>{
                    return (
                        <Card
                            data={element}
                            key={index}
                            handleIncrease={this.handleIncrease}
                            handleDecrease={this.handleDecrease}
                         />
                    );
                })}
            </div>
            <button onClick={this.increaseAll}>INCREASE ALL</button>
            <button onClick={this.decreaseAll}>DECREASE ALL</button>
        </div>
    );
  }
}

export default App;
