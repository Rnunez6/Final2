import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";

import Home from "./HomePage/Home";
import Contact from "./Contacting/Contact";
import Projects from "./Theprojects/Projects";
import Resume from "./Resume";
import Games from './Gaming/Games';
import './App.css';

 
class Main extends Component {
  render() {
  return (
    
    <HashRouter>
    <div className="Header-BackgroundColor">

      <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center' }} >MicroTrain Final 2021</h1>
      <ul className="header">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/projects" >Projects</NavLink></li>
        <li><NavLink to="/resume" >Resume</NavLink></li>     
        <li><NavLink to="/game" >Games</NavLink></li>
        <li><NavLink to="/contact" >Contact</NavLink></li>
      
     </ul>
     <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/game" component={Games}/>
    </div>
    
    </div>
    </HashRouter>
);
  }
}

export default Main;