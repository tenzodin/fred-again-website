import React, { useState } from 'react';
import Lightbox from './Lightbox';
import Masonry from 'react-masonry-css';
import './ImageGrid.css';

const ImageGrid = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  // Define breakpoints for responsive design
  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1200: 3,    // 3 columns for screens <= 1200px
    768: 2,     // 2 columns for screens <= 768px
    480: 1      // 1 column for screens <= 480px
  };

  return (
    <div className="view-content">
      <div className="item-list">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {images.map((img, index) => (
            <div key={index} className="lightbox-image" onClick={() => openLightbox(img)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </Masonry>
      </div>
      {lightboxOpen && <Lightbox image={currentImage} onClose={closeLightbox} />}
    </div>
  );
};

export default ImageGrid;
