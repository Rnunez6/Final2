import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './App.css';
 
let center ={
  display: 'flex',
  justifyContent:'center',
  alignItems:'center'
}

class Resume extends Component {
  render() {
    return (
        <Jumbotron>
          
          <h1 style={center} >Roman Nunez Resume</h1>
          <h2 style={center} >Full Stack Web and Hybrid Mobile Applications Developer</h2>
                <p>Full stack web and hybrid mobile applications developer specializing in full stack JavaScript application and architectures. Experienced in all stages of the development life cycle, well versed in numerous programming languages. Hands-on experience leading all stages of system development efforts, including requirements in definition design, architecture, testing and support.
Outstanding leadership abilities; able to coordinate and direct all phases of project-based efforts.</p>
          
        
          
            <h2 style={center} >Core Competencies</h2>
               <ul>
                  <li>Full Stack Development</li>
                  <li>Strong Analytical Skills</li>
                  <li>Hybrid Mobile Development</li>
                  <li>Prioritizes Tasks</li>
                  <li>Savvy Problem Solver</li>
                  <li>Strong Leadership Skills</li>
               </ul>
   
          
               <h2 style={center} >Certifications and Technical Proficiencies</h2>
                      <p><span style={{fontWeight: "bold"}}>Computer Languages: </span> C++, C# </p>
                      <p><span style={{fontWeight: "bold"}}>3D Design and Modeling:</span> Maya </p>
                      <p><span style={{fontWeight: "bold"}}>Platforms:</span> Windows  </p>

                   
          
                      <h2 style={center}>Professional Experience</h2>
                      <p><b>Diaz Transportation - Cicero IL <span style={{float: 'right'}} className="float-right"> Oct 2015 - Nov 2019</span></b></p>
                      <ul>
                        <li>Dispatching trucks</li>
                        <li>Book keeping on Microsoft Excel</li>
                      </ul>

                      
                    <h2 style={center} >Education</h2>
                     
                    <h4 style={{textAlign: 'left'}}>MDePaul University, Chicago, IL -  <span style={{float: 'right'}} className="float-right"> June 2015 </span> </h4>
                      <p>Bachelor of Science </p>
                    
                    <h4 style={{textAlign: 'left'}}>Morton College, Cicero, IL -   <span style={{float: 'right'}} className="float-right"> May 2011 </span> </h4>
                      <p>Associate in Science </p>    
              </Jumbotron> 
     
    );      
    }

    
  }
   
  export default Resume;