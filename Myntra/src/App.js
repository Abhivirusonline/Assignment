import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from "./components/Carousel/carousel";
import DealCardViewPort from "./components/DealCardViewPort/DealCardViewPort";
import BrandFocusCardViewPort from "./components/BrandFocusView/BrandFocusView";
import {library} from "@fortawesome/fontawesome-svg-core";
import BrandFocusViewPort from "./components/BrandFocusView/BrandFocusView";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
          <Header/>
          <Carousel/>
          <DealCardViewPort/>
          <h2>BRANDS IN FOCUS</h2>
          <p>Show some brand Love</p>
          <BrandFocusCardViewPort/>
      </div>
    );
  }
}

export default App;
