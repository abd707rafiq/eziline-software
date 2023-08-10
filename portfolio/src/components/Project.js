import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "../data1"; // Import the data array from data.js

const Project = () => {
  const [projects] = useState(data); // Use the imported data array

  const navigate = useNavigate();

  const handleReadMore = (projectId) => {
    // Perform any necessary actions here before navigating
    // to the Project Detail page
    console.log('Clicked Read more. Project ID:', projectId);
    navigate(`/project-detail/${projectId}`);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <div className="para" key={project.id}>
          <div className='content'>
            <div className='text'>
              <h1 className='skills'>{project.title}</h1>
              <h1 className='skill-heading'>{project.heading}</h1>
              <h2 className='skills-para'>{project.description}</h2>
              <button className='btn4' onClick={() => handleReadMore(project.id)}>Read more</button>
            </div>
            <img src={project.img} alt={project.title} className='project-img'/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
