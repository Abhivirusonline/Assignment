import React,{Component} from "react";
import ImageData from "../../ImageData";
import DealCard from "../DealCard/DealCard";
import "./DealCardViewPort.css";
class DealCardViewPort extends Component{
    render() {
        console.log("iamge data"+ImageData["Deals-card-images"]);
        return(
            <div className={"Deal-card-viewport"}>
                {
                    ImageData["Deals-card-images"].map(element=>{
                        return(
                            <DealCard image={element.image} message={element.message}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default DealCardViewPort;