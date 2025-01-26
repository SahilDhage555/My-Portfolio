import React, { useRef } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('sahil8669', 'portfolio8669', form.current, 'CGX7HwbVPK7VVOhaD')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
          alert('Failed to Send Message');
      });

    e.target.reset(); 
  };

  return (
    <div id="contact" className='bg-black'>
      <div className="container">
        <div className="row justify-content-evenly cont-area">
          <div className="col-4 cont-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fa-regular fa-paper-plane"></i>sahildhage555@gmail.com</p>
            <p><i className="fa-solid fa-square-phone"></i>8669813011</p>
            <div className="social">
              <a href="https://www.facebook.com/sahil.dhage.555"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/sahil_dhage_555"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/sahil-dhage555"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://www.twitter.com/@sahil_dhage_555"> <FaXTwitter style={{ width: '28px', marginBottom: '5px' }} /></a>
            </div>
            <a href="Sahil Dhage.pdf" download='Sahil-Dhage-Resume' className="btn btn2"><i className="fa-solid fa-download m-1"></i>Resume</a>
          </div>
          <div className="col-7 cont-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="message" rows="6" placeholder="Enter your Message :-"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
