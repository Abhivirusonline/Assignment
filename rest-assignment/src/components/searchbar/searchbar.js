import React,{Component} from "react";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            query:"",
            url:"http://127.0.0.1:5000/users?name="
        };
    }
    handleData=()=>{
        if(this.state.query.length>=2){

            this.props.handleSearch(this.state.url+this.state.query);
        }
        else
            this.props.clearUser();
    }

    handleChange=(event)=>{
       this.setState({
           query:event.target.value
       },
           this.handleData
       );
    }

    render() {
        let list=this.props.users_list;
        console.log(list);
        return(
            <div className={"search-bar"}>
                <h1>Node JS</h1>
                <p>Search Users by Name :: </p>
                    <input type="search" placeholder={"enter name to search"} onChange={this.handleChange} value={this.state.query}/>
                    <ol>

                            {
                                list.map(item=>{
                                    return <li key={item.name}>{item.name}</li>;
                                })
                            }

                    </ol>
            </div>
        );
    }
}
export default SearchBar;

