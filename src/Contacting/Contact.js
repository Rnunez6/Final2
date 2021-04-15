import React, { Component } from "react";
import "./contact.css";

var api_key = '158a796dea050480d053065dfd1fb5ba-d32d817f-f979fc20';
var domain = 'sandbox18b1ca2430d449ac8970dee56cfba82f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 


let center ={
  display: 'flex',
  justifyContent:'center',
  alignItems:'center'
}


class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      from: '', 
      to: 'roman_nunez@ymail.com', 
      subject: '',
      text: '' };

    }

    handleSubmit(e){
      e.preventDefault();
      mailgun.messages().send(this.state, function (error, body){})

      this.resetForm()
    }
    resetForm(){
      this.setState({from: '', subject: '', text: ''})
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div>
        <h2 style={center}>Contacts</h2>
        <p>You can contact me for more information.</p>
        <p> <a href="https://github.com/Rnunez6" >Github</a></p>
        <p> <a href="https://www.linkedin.com/in/roman-nunez-4a52b382/">Linkedin </a></p>
        <h1>Email me </h1>
        <input type ="text"  size="39" value={this.state.from}  onChange={e => this.setState({from: e.target.value})}></input>
        <p></p>
      <input type ="text"  size="39" value={this.state.subject}  onChange={e => this.setState({subject: e.target.value})}></input>
        <p></p>
      <textarea type ="text" rows="8" cols="41" value={this.state.text}  onChange={e => this.setState({text: e.target.value})}></textarea>
      <p></p>
      <button className="btn btn-primary" >Submit</button>
      </div>
      </form>
    );
  }



}


 
export default Contact;
