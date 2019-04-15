import React from 'react';
import styled from "styled-components";

function BrandFocusCardComponent(props) {
    return(
        <div className={props.className}>
            <img src={props.image} alt="Brands" width={"100%"}/>
            <div className={"description"}>
                <h5>{props.brandName}</h5>
                <p>{props.message}</p>
                <p className={"light-text"}> + Explore</p>
            </div>
        </div>
    );
}

const BrandFocusCard =styled(BrandFocusCardComponent)`

max-width:290px;
min-width:290px;
position:relative;
max-height:320px;
margin-bottom:80px;

.description{
    position:relative;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding:15px 15px 3px 15px;
    max-width:87%;
    top:-70px;
    background-color:#fff;
    margin: 0 auto;
    text-align:center;
    line-height:1.2;
   

}
.description h5{
    font-weight:700;
    line-height:1;
    
}
.description p{
    font-weight:700;
    line-height:1;
}

.description .light-text{
    color:#d9d7dd;
    font-size:0.7rem;
    margin-top:10px;
    line-height:1;
}
`
export default BrandFocusCard;