import React,{Component} from "react";
import styled from "styled-components";

const searchComponent=({className,children})=>(
    <input type="search" className={className} placeholder={"Search for products brands and more"}/>
)
const SearchBar=styled(searchComponent)`
margin-right: 50px;
  padding: 10px;
  line-height: 24px;
  outline: 0;
  border:1px solid #f5f5f5;
  background-color: #f5f5f5;
  :focus{
    border:none;
  }
`
export default SearchBar;