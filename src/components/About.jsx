import React from 'react';

const About = ({ about }) => (
  <section id="about" className="section about">
    <div className='about-container'>
      <h2>About Me</h2>
      {about.intro.map((intro, index) => (
        <p key={index}>{intro}</p> // Added key for unique identification
      ))}
    </div>
    <div className='skills'> {/* Container for side-by-side skills */}
      <div className='skill-container'>
        <h3>Skills</h3>
        <ul className="skill">
          {about.skills.slice(0, Math.ceil(about.skills.length / 2)).map((skill, index) => (
            <li key={index}>{skill}</li> // Added key for unique identification
          ))}
        </ul>
      </div>
      <div className='skill-container'>
        <h3>More Skills</h3>
        <ul className="skill">
          {about.skills.slice(Math.ceil(about.skills.length / 2)).map((skill, index) => (
            <li key={index}>{skill}</li> // Added key for unique identification
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
