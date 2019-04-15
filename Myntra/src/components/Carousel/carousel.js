import React,{Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import ImageData from "../../ImageData";

const carousel=()=>{
    return(
        <div className={"container-fluid crousel-wrapper"}>
            <Carousel>
                {
                   ImageData["carousel-images"].map(item=>{
                       return (<Carousel.Item>
                               <img
                                   className="d-block w-100"
                                   src={item}
                                   alt="First slide"
                                   width={"100%"}
                               />
                           </Carousel.Item>
                       )
                   })
                }
            </Carousel>

        </div>
    );
}
export default carousel;