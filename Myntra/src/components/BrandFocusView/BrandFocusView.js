import React,{Component} from "react";
import ImageData from "../../ImageData";
import BrandFocusCard from "../BrandFocusCard/BrandFocusCard";
import "./BrandFocusView.css";

class BrandFocusViewPort extends Component{
    render() {
        return(
            <div className={"brand-focus-card-viewport"}>
                {

                    ImageData["brands-focus-images"].map(element=>{
                        return <BrandFocusCard
                            image={element.image}
                            brandName={element["brand-name"]}
                            message={element.message} />
                    })
                }
            </div>
        )
    }
}

export default BrandFocusViewPort;
