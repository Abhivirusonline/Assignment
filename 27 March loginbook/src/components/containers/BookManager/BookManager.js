import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Book from "../../book/Book";
import books from "../../../books";
import "../../../App.css";

class BookManager extends Component{
    constructor(props){
        super(props);
        this.state={
            books:books,
        };
    }
    render() {
        return(
            <div className={"books"}>
                {this.state.books.map((item,index)=>{
                    const {_id,title,isbn}=item;
                    return(
                        <Link className={"link"}
                              to={{ pathname: `book-detail/${_id}/${title}`, state: item }}
                            key={isbn} >

                         <Book data={item} />
                        </Link>
                    );
                })}
            </div>
        );
    }
}
export default BookManager;