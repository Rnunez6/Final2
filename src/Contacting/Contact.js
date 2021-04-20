import React, { Component } from "react";
import "./contact.css";
import emailjs from 'emailjs-com';

let center ={
  display: 'flex',
  justifyContent:'center',
  alignItems:'center'
}

export default function Contact ()  {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_romantraintest', 'template_6reqtkg', e.target, 'user_pEmHept4yZ5weLcxgucxt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
 
    return (
      <form onSubmit={sendEmail} method="POST">
      <div>
        <h2 style={center}>Contacts</h2>
        <p>You can contact me for more information.</p>
        <p> <a href="https://github.com/Rnunez6" >Github</a></p>
        <p> <a href="https://www.linkedin.com/in/roman-nunez-4a52b382/">Linkedin </a></p>
        <h1>Email me </h1>
        <input type ="text" placeholder="Email"  size="39"  name="email"></input>
        <p></p>
      <input type ="text" placeholder="Subject" size="39"  name="subject"></input>
        <p></p>
      <textarea type ="text" placeholder="Body" rows="8" cols="41" name="text"></textarea>
      <p></p>
      <button className="btn btn-primary" >Submit</button>
      </div>
      </form>
    );

}

