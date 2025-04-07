import React from 'react';
import { Link } from 'react-router-dom';

function ResumePG() {
  return (
    <div className="resume-container">
      <h2 className="text-center mb-4">My Resume</h2>

      <iframe
        src={`${process.env.PUBLIC_URL}/Resume/Resume100.pdf`}
        title="Resume"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      >
      <p>Your browser does not support embedded PDFs. Please download the file below.</p>
      </iframe>

      <div className="text-center mt-4">
        <a
          href={`${process.env.PUBLIC_URL}/Resume/Resume100.pdf`}
          download="Resume100.pdf"
          className="btn hire"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default ResumePG;