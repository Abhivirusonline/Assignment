import React,{Component} from "react";
import NavLink from "./Styled/NavLink";
import BrandLogo from "./Styled/BrandLogo";
import HeaderStyle from "./Styled/HeaderStyle";
import PictureLink from "./Styled/PictureLink";
import SearchBox from "./Styled/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
function Header() {
    return(
        <div className={"header-wrapper"}>
            <HeaderStyle>
                <div className={"left-items"}>
                    <FontAwesomeIcon icon={"bars"} className={"bar_icon"} />
                    <BrandLogo className={"Brand-logo"}/>
                    <NavLink className={"nav-link"}>MEN</NavLink>
                    <NavLink className={"nav-link"}>WOMEN</NavLink>
                    <NavLink className={"nav-link"}>KID</NavLink>
                    <NavLink className={"nav-link"}>LIFESTYLE</NavLink>
                    <NavLink className={"nav-link"}>DISCOVER</NavLink>
                </div>
                <div className={"right-items"}>
                    <SearchBox className={"search-box"}/>
                    <div className={"profile-link"}>
                        <PictureLink icon="user" link="Profile" />
                        <PictureLink icon="bookmark" link="Wishlist" />
                        <PictureLink icon="shopping-bag" link="Bag" />
                    </div>
                </div>
            </HeaderStyle>
        </div>
    );

}

export default Header;