import React,{Component} from "react";
import styled from "styled-components";

const NavComponent=({className,children})=>(
    <a className={className}>
        {children}
    </a>
)
const NavLink =styled(NavComponent)`
color:#ccc;
padding-left:30px;
font-weight:bold;
text-decoration:none;
`

export default NavLink;