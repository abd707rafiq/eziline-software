import React from 'react';
import img1 from "../images/images (1).png";

const Skill = () => {
  return (
    
    <div className='container1'>
      <div className='card-sectoion'>
      <section className='card-container'>
        <img src={img1} alt='name' className='card-img'/>
        <div className='card-detail'>
          <h1 className='card-title'>Product Design</h1>
          <h3 className='card-desc'>The technological revolution is changing aspect </h3>
        </div>
      </section>
      <section className='card-container'>
        <img src={img1} alt='name' className='card-img'/>
        <div className='card-detail'>
          <h1 className='card-title'>Logo Design</h1>
          <h3 className='card-desc'>The technological revolution is changing aspect </h3>
        </div>
      </section>
      <section className='card-container'>
        <img src={img1} alt='name' className='card-img'/>
        <div className='card-detail'>
          <h1 className='card-title'>UI Design</h1>
          <h3 className='card-desc'>The technological revolution is changing aspect </h3>
        </div>
      </section>
      <section className='card-container'>
        <img src={img1} alt='name' className='card-img'/>
        <div className='card-detail'>
          <h1 className='card-title'>Icon Design</h1>
          <h3 className='card-desc'>The technological revolution is changing aspect </h3>
        </div>
      </section>
      </div>
      <div className="para">
        <h1 className='skills'>____My Skills</h1>
        <h1 className='skills-heading'>Why Hire Me For <br/>Next Project?</h1>
        <h2 className='skills-para'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</h2>
        <button className='btn4'>Download CV</button>
      </div>
     
    </div>
  );
}

export default Skill;
