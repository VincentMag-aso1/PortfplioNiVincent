import React from 'react';

function About() {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <img 
              src="/your-photo.jpg" 
              alt="Your Photo" 
              className="rounded-circle mb-3 mb-md-0" 
              style={{ width: '192px', height: '192px', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-8">
            <p style={{ fontSize: '1.1em' }}>
              My name is Vincent Mag-aso, a 4th-year Bachelor of Science in Information Technology (BSIT) student. I was born on May 21, 2004.
               I am passionate about learning more about technology, especially in the field of programming and web development. As an IT student, I am continuously improving my skills, gaining knowledge, and preparing myself for future opportunities in the tech industry.
               I am hardworking, motivated, and eager to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;