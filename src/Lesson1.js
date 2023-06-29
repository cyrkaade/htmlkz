import React, { useState } from 'react';
import './Lessons.css'; // Import the CSS file for styling

const Lesson1 = () => {
  const [htmlCode, setHtmlCode] = useState('');

  const handleHtmlCodeChange = (event) => {
    setHtmlCode(event.target.value);
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Text Section</h2>
        <p>Insert your text here.</p>
      </div>

      <div className="section">
        <h2>HTML Code Section</h2>
        <textarea
          value={htmlCode}
          onChange={handleHtmlCodeChange}
          placeholder="Insert your HTML code here"
        />
      </div>

      <div className="section">
        <h2>HTML Code Result</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </div>
    </div>
  );
};

export default Lesson1;
