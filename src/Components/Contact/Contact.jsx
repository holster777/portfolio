// Dependent imports

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Main Function

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_bsepb6i', form.current, 'g5yUnJq97XEbEe1xfiexi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset()
  };

  return (
      <div className="container">
        <h3>Why don't you...</h3>
        <h1>Get in touch</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
  );
};

export default Contact