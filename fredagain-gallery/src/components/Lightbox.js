import React, { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ image, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className === 'lightbox-overlay') {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener for Esc key
    document.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="lightbox-overlay" onClick={handleOverlayClick}>
      <span className="close-lightbox" onClick={onClose} aria-label="Close">&times;</span>
      <img className="lightbox-content" src={image.src} alt={image.alt} />
    </div>
  );
};

export default Lightbox;
