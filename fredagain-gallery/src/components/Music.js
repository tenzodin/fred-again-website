// src/components/Music/Music.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from '../Modal/Modal';
import Lightbox from '../Lightbox/Lightbox';
import './Music.css';

const Music = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLightbox = (imgSrc, imgAlt) => {
    setCurrentImage({ src: imgSrc, alt: imgAlt });
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
  };

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    800: 2,
    500: 1,
  };

  return (
    <div className="music-page">
      <h1>Fred Again - Boiler Room London</h1>
      <div className="album-section">
        <h2>Albums</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img, index) => (
            <div key={index} className="album" onClick={() => openLightbox(img.src, img.alt)}>
              <img src={img.src} alt={img.alt} className="lightbox-image" loading="lazy" />
              <p>{img.alt}</p>
            </div>
          ))}
        </Masonry>
      </div>

      {/* Quote Section */}
      <section className="quote-section">
        <p className="quote">
          “When I was doing tunes when I was younger, it was always kind of anonymous and faceless.
          But it was obvious when I started doing this that I wanted it to be the exact opposite of that.
          I crave the intimacy and the humanity of it”
        </p>
        <p className="quote-by">— Fred again..</p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <p className="cto-head">Stay in the groove with the latest updates from Fred again!</p>
        <p className="cto-body">
          Sign up for our newsletter and be the first to know about new releases, exclusive content, and upcoming shows.
        </p>
        <button className="cta-button-2" onClick={openModal}>Sign up</button>
      </section>

      {/* Signup Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Sign Up for Updates</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            alert(`Thank you for signing up, ${email}!`);
            e.target.reset();
            closeModal();
          }}
        >
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <button type="submit" className="cta-button">Subscribe</button>
        </form>
      </Modal>

      {/* Lightbox Modal */}
      <Lightbox image={currentImage} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </div>
  );
};

export default Music;
