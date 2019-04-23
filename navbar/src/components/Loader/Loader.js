import React from "react"
import loader from "./game loader.gif";
const Loader=()=>{
    return(
        <div className={"loader"}>
            <img src={loader} alt="Loading"/>
        </div>
    );
}
export default Loader;