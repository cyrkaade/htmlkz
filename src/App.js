import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
import jsonData from './texts/text1.json';

const App = () => {
  const [buttonText, setButtonText] = useState('Button');
  const [htmlCode, setHtmlCode] = useState('');

  const handleHtmlCodeChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleButtonClick = () => {
    setButtonText(htmlCode === jsonData.code ? 'Correct' : 'Incorrect');
  };

  return (
    <div className="container">
      <div className="section">
        <h2>{jsonData.title}</h2>
        <p>{jsonData.text}</p>
        <button onClick={handleButtonClick}>{buttonText}</button>
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

export default App;
