import React, { Component } from "react";

var api_key = '158a796dea050480d053065dfd1fb5ba-d32d817f-f979fc20';
var domain = 'sandbox18b1ca2430d449ac8970dee56cfba82f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'roman_nunez@ymail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
class Mail extends Component {
render() {
    return (
        mailgun.messages().send(data, function (error, body) {
        console.log(body);})

  );
}

}
export default Mail;

