import React,{Component} from "react";
import "../../App.css";

function BookDetail(props) {
    const {
        title,isbn,longDescription,pageCount,
        thumbnailUrl,authors
    }=props.location.state;
    console.log(props.location.state);
    return(
        <div className={"BookDetail"}>
            <h2>{title}</h2>
             <div className={"TopSection"}>
                <div className={"thumbnail"}>
                    <img src={thumbnailUrl} alt=""/>
                </div>
                 <div className={"ShortDescription"}>
                     <p>Title :{title}</p>
                     <p>ISBN :{isbn}</p>
                     <p>Page Count : {pageCount}</p>
                     <p>Authors :{authors.join(', ')}</p>

                 </div>
             </div>
            <div className={"itemDetail"}>
                <h2>Descrition</h2>
                {longDescription}
            </div>
        </div>
    );
}

export default BookDetail;

