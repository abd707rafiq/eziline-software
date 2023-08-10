import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';

import data from '../data1';

const Projectdetail = () => {
  const [projects] = useState(data); // Use the imported data array
  const [likeCount, setLikeCount] = useState(65); // Initial like count

  const incrementLikeCount = () => {
    setLikeCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <div className="para" key={project.id}>
          <div className='content'>
            <div className='text'>
              <h1 className='skills'>{project.title}</h1>
              <h1 className='skills-heading'>{project.heading}</h1>
              <h2 className='skills-para'>{project.description}</h2>
              <div className="project-icon">
                <div className="icon-1" onClick={incrementLikeCount}>
                  <AiOutlineHeart />
                </div>
                <span className='span'>Like ({likeCount})</span>
                <div className="icon-2"><AiOutlineShareAlt /></div>
                <span className='span'>share</span>
              </div>
              <div className="category">
                <h1 className='cat1'>Categories</h1>
                <h3 className='cat2'>App design</h3>
                <h2 className='cat3'>Client</h2>
                <h3 className='cat4'>company name</h3>
              </div>
            </div>
            <img src={project.img} alt={project.title} className='project-img'/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectdetail;
