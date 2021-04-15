import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel'

import thepup1 from '../images/pup1.jpeg';
import thepup2 from '../images/pup2.jpeg';
import thepup3 from '../images/pup3.jpeg';
import pup6 from '../images/20150306_133547.jpg';

import Japan from '../images/temple.jpg';
import Russia from '../images/russia.jpeg';
import Southkorea from '../images/southkorea.jpeg'
import Germany from '../images/germany.jpg';

import Anno from '../images/Anno2070.jpg';
import Banished from '../images/banished.jpg';
import Civ from '../images/Civilization-V.jpg';
import Sim from '../images/SimCity.jpeg';


import './HomePage.css'

let styles = {
  margin: 'auto',
  width: '500px'
};


let center ={
  display: 'flex',
  justifyContent:'center',
  alignItems:'center'
}
 


class Home extends Component {
    render() {
        return (
          <div className="Home-BackgroundColor">
            <h2 style={center}>About me</h2>
            <h3 style={center} > Hello my name is Roman Nunez</h3>
            <p></p>
            <h4 style={center}>Here are somethings that I like to do</h4>

            <div style={styles}>


            <p></p>
            <p style={center}> I enjoy playing.</p>
            <p></p>
            <Carousel>  
              

            <Carousel.Item>
              <img
                className="home-link"
                src="https://media3.s-nbcnews.com/j/newscms/2021_08/3452698/210225-2x1-gaming-accessories-ew-1244p_bfd538c0fca19c96bec9b32fa43d865d.nbcnews-fp-1200-630.jpg" 
                alt="First slide"/>
              <Carousel.Caption>
              <h3>Gaming</h3>
            </Carousel.Caption>
            </Carousel.Item>    

              <Carousel.Item>
              <img
                className="home-link"
                src={Anno} alt='Anno' /> 
              <Carousel.Caption>
            </Carousel.Caption>
            </Carousel.Item> 

            <Carousel.Item>
              <img
                className="home-link"
                src={Banished} alt='Banished' /> 
              <Carousel.Caption>
            </Carousel.Caption>
            </Carousel.Item> 

            <Carousel.Item>
              <img
                className="home-link"
                src={Civ} alt='Civ' /> 
              <Carousel.Caption>
            </Carousel.Caption>
            </Carousel.Item> 

            <Carousel.Item>
              <img
                className="home-link"
                src={Sim} alt='Sim' /> 
              <Carousel.Caption>
            </Carousel.Caption>
            </Carousel.Item> 

            </Carousel>

            

            <p></p>
            <p style={center}> I have 3 dogs. I find pets to be a great way to relax.</p>
            <p></p>

            <Carousel>  

              <Carousel.Item>
              <img
                className="home-link"
                src={thepup1} alt='thepup1' /> 
              <Carousel.Caption>
              <h3>Old Dog</h3>
              <p style={center}> 4/1/21 he's 15 years old and still going strong</p>
            </Carousel.Caption>
            </Carousel.Item>  

            
              <Carousel.Item>
              <img
                className="home-link"
                src={thepup2} alt='thepup2' /> 
              <Carousel.Caption>
              <h3>Play time</h3>
              <p style={center}>Wanting to play after getting a hair cut</p>
            </Carousel.Caption>
            </Carousel.Item>   

              <Carousel.Item>
              <img
                className="home-link"
                src={pup6} alt='pup6' /> 
              <Carousel.Caption>
              <h3>New friend?</h3>
              <p style={center}>Old dog meets new little pups for the 1st time</p>
            </Carousel.Caption>
            </Carousel.Item>     
 
            
            <Carousel.Item>
              <img
                className="home-link"
                src={thepup3} alt='thepup3' /> 
              <Carousel.Caption>
              <h3>Nap Time</h3>
              <p style={center}>Taking a nap after a long day</p>
            </Carousel.Caption>
            </Carousel.Item>    

            </Carousel>

            <p></p>
            <p>Travel is a great way to meet new people and make new connections and learn a lot about the world around you. Here are some places I hope to one day go to.</p>
            <p></p>


            <Carousel >

            <Carousel.Item>
              <img
                className="home-link"
                src="https://www.eatright.org/-/media/eatrightimages/health/lifestyle/travel/quickguidetofoodsafetywhiletravelingintheus.jpg" alt="React"/>
              <Carousel.Caption>
              <h3 class="text-light bg-dark">Traveling</h3>
            </Carousel.Caption>
            </Carousel.Item>   


            <Carousel.Item>
              <img
                className="home-link"
                src={Japan} alt="Japan" />
              <Carousel.Caption>
              <h3 class="text-light bg-dark">Japan</h3>
            </Carousel.Caption>
            </Carousel.Item>  
            
            <Carousel.Item>
              <img
                className="home-link"
                src={Russia} alt="Russia" />
              <Carousel.Caption>
              <h3 class="text-light bg-dark">Russia</h3>
            </Carousel.Caption>
            </Carousel.Item>  

            <Carousel.Item>
              <img
                className="home-link"
                src={Southkorea} alt="Southkorea" />
              <Carousel.Caption>
              <h3 class="text-light bg-dark">South Korea</h3>
            </Carousel.Caption>
            </Carousel.Item>  


            <Carousel.Item>
              <img
                className="home-link"
                src={Germany} alt="Germany" />
              <Carousel.Caption>
              <h3 class="text-light bg-dark">Germany</h3>
            </Carousel.Caption>
            </Carousel.Item>  

            </Carousel>
                   
            </div>
            </div>
    );
  }
}

export default Home;