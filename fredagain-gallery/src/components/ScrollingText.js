// src/components/ScrollingText.js
import React from 'react';
import './ScrollingText.css';

const ScrollingText = () => {
  const repeatedText = 'again '.repeat(200); // Adjust repetition as needed

  return (
    <div className="scrolling-text">
      {repeatedText}
    </div>
  );
};

export default ScrollingText;
