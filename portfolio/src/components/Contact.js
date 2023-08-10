import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="para">
          <div className="content">
            <div className="text">
              <h1 className="skills">_____ Contact me</h1>
              <h3 className="skills-heading">Get In Touch<br /> With Me</h3>

              <h2 className="skills-para">
                The technological revolution is changing aspects of our lives,
                and the fabric of society itself. It's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert Factual knowledge is less
                prized when everything you ever need to know can be found at
                doing everything.
              </h2>
              <div className="contact-icon">
                <div className="phone-icon">
                  <AiOutlinePhone />
                </div>

                <div className="phone">
                  <h2>Phone</h2>
                  <h2>051388-13-42-3</h2>
                  <h2>05087658-13-42-3</h2>
                </div>
                <div className="mail-icon">
                  <AiOutlineMail />
                </div>
                <div className="mail">
                  <h2>E-mail</h2>
                  <h2>abd@gmail.com</h2>
                  <h2>dsfg@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        
        <form>
            <div className="twoinputs">
            <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
            </div>
          
          <textarea placeholder="Message" className='meassage'></textarea>
          <button type="submit" className='btn4'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
