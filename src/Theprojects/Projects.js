import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import draw from '../images/Screenshot from 2021-04-05 15-24-39.png';
import bootstrap from '../images/bootstrap.png'

let styles = {
  margin: 'auto',
  width: '500px'
};
 
class Projects extends Component {
  render() {
    return (
     
      <div style={styles}>
      <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center' }} >Here are some projects I have worked on </h3>
      <Carousel>
      
      <div>
      <p>This project making a <a href="https://rnunez6.github.io/jquery-apod/index">NSA </a> apod in jquery</p>
      <img src="https://apod.nasa.gov/apod/image/9902/ngc1316_wfpc.jpg" alt="NSA" />
      </div>
      
      <div>
      <p>This is a image <a href="https://rnunez6.github.io/carousel/">carousel </a> project using react js</p>
      <img src="https://i.morioh.com/2019/12/07/12996404493f.jpg" alt="React"/>
      </div>

      <div>
      <p>This is a <a href="https://rnunez6.github.io/draw/program">Draw </a>project </p>
      <img src={draw} alt="Drawing"/>
      </div>

      <div>
      <p>This is a <a href="https://rnunez6.github.io/bootstrap/index.html">Bootstrap </a>project of this website</p>
      <img src={bootstrap} alt="bootstrap"/>
      </div>

      <div>
      <p>This is a little <a href="https://github.com/Rnunez6/game">game </a>project</p>
      <img src={bootstrap} alt="bootstrap"/>
      </div>

      </Carousel>
      </div>
    );
  }
}
 
export default Projects;