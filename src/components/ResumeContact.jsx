import React from 'react';

function ResumeContact() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <h2>Resume & Contact</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Download Resume</h5>
            <p>Click the button below to download my resume (PNG).</p>
            <a href="/resume.png" className="btn btn-primary" download>
              Download Resume
            </a>
          </div>
          <div className="col-md-6 mb-4">
            <h5>Contact Information</h5>
            <p><strong>Email:</strong> <a href="mailto:Magasovincent5@gmail.  ">Magasovincent5@gmail.com</a></p>
            <p><strong>Phone:</strong> 09096641541</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/VincentMag-aso1" target="_blank" rel="noreferrer">https://github.com/VincentMag-aso1</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeContact;
