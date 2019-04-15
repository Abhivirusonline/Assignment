import React,{Component} from "react";
import styled from "styled-components";
import myntralogo from "../../../Myntra sprite.png";

const BrandLogoComponent =({className,children})=>(
    <header className={className}>
        {children}
    </header>
)
const BrandLogo=styled(BrandLogoComponent)`
background:url('${myntralogo}')  no-repeat -1148px 0;
width: 136px;
height: 94px;

`
export default BrandLogo;