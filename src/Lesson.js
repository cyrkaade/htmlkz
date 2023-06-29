import React from 'react';
import { useParams } from 'react-router-dom';

const Lesson = () => {
  const { lessonNumber } = useParams();

  return (
    <div>
      <h1>Lesson {lessonNumber}</h1>
      <p>Lesson content goes here...</p>
    </div>
  );
};

export default Lesson;