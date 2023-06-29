import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling
import jsonData from './texts/text1.json';



const App = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleHtmlCodeChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleButtonClick = () => {
    if (htmlCode === '<h1>Hello world</h1>') {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="container">
      <div className="section">
        <h2>{jsonData.title}</h2>
        <p>{jsonData.text}</p>
        <button onClick={handleButtonClick}>Run the tests</button>
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

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <p>You have successfully completed the challenge.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Link to="/posts">
            <Button onClick={handleCloseDialog} color="primary">
              Go to the next challenge
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
