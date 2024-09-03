import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import Swal from 'sweetalert2';
import './contact.css';

const Contact = () => {
  const form = useRef();

  // Function to play the form submit tone
  const playFormSubmitTone = () => {
    const audio = new Audio('/form-submit-tone.mp3');
    audio.play();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6f8w9ir', 'template_iwzq0s8', form.current, 'LyUAK6vxj1s1Vk7v7')
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You For Contacting Me",
            showConfirmButton: false,
            timer: 2000,
          });
          playFormSubmitTone(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <motion.div 
          className="contact_options"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>ry.tech02@gmail.com</h5>
            <a href="mailto:ry.tech02@gmail.com">Send message</a>
          </article>

          <article className="contact_option">
            <BsGithub className='contact_option_icon' />
            <h4>Github</h4>
            <h5>github.com/rajendrayadav</h5>
            <a href="https://github.com/rajendra-yadav02">Open</a>
          </article>
        </motion.div>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <input type="text" name='user_name' placeholder='Your Name' required />
          <input type="email" name='user_email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
