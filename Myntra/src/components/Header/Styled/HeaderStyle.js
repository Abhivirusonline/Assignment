import React,{Component} from "react";
import styled from "styled-components";
const HeaderComponent =({className,children}) =>(
    <header className={className}>
        {children}
    </header>
)
const HeaderStyle=styled(HeaderComponent)`
background:tranparent;
display:flex;
justify-content:space-between;
align-item:center;
padding:1.em
box-shadow: 0 4px 12px 0 rgba(0,0,0,0.06);
`
export default HeaderStyle;