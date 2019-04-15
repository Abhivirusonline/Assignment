import React from "react";
import styled from "styled-components";
import "./DealCard.css";

function DealCardComponent(props) {
    const {className,image,message}=props
    return(
        <div className={className}>
            <img src={image} alt="deal card" width={"100%"} />
            <div className={"card-text"}>
                <h5>HOT DEALS</h5>
                <h4>{message}</h4>
                <p> + Shop Now</p>
            </div>
        </div>
    );
}
const DealCard=styled(DealCardComponent)`
    position: relative;
    max-width: 290px;
    min-width: 290px;
    max-height: 220px;
    margin-top: 50px;

`
export default DealCard;