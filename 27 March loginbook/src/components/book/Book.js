import React,{Component} from 'react';

function Book(props) {
    return(
        <div className={"book"}>
            <img src={props.data.thumbnailUrl} alt="Book Thumbnail"/>
            <h3>{props.data.title}</h3>
        </div>
    );
}
export default Book;