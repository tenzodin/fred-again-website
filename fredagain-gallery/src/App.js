import React from 'react';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import ScrollingText from './components/ScrollingText';
import Footer from './components/Footer';
import './App.css';

function App() {
  const images = [
    {
      src: './fredpics/fredagain/adore u_ten days cover - downloaded from Warner Box - Slide 6.jpg',
      alt: 'Adore U'
    },
    {
      src: './fredpics/fredagain/BlueFinals Lil, Backseat - Slide 15 in Deck (gif) .gif',
      alt: 'Blue Finals Lil Backseat'
    },
    {
      src: './fredpics/fredagain/BlueLondon008 (cropped) downloaded from dropbox, I saw u - Slide 12 in Deck.jpg',
      alt: 'Blue London'
    },
    {
      src: './fredpics/fredagain/BLUESKY.jpg',
      alt: 'Blue Sky'
    },
    {
      src: './fredpics/fredagain/fear less  - downloaded from Lucy’s Deck & uploaded to Drive - Slide 8.png',
      alt: 'Fear Less'
    },
    {
      src: './fredpics/fredagain/FRED AGAIN Lead profile image for all socials_DSP_s.jpg',
      alt: 'Fred Again Profile'
    },
    {
      src: './fredpics/fredagain/GIF-1-.gif',
      alt: 'GIF 1'
    },
    {
      src: './fredpics/fredagain/GLASTO-14-683x1024.jpg',
      alt: 'Glasto 14'
    },
    {
      src: './fredpics/fredagain/GLASTO-25-1024x683.jpg',
      alt: 'Glasto 25'
    },
    {
      src: './fredpics/fredagain/glow - downloaded from Lucy’s Deck & uploaded to Drive - Slide 11.png',
      alt: 'Glow'
    },
    {
      src: './fredpics/fredagain/IMG_0273.JPG',
      alt: 'IMG 0273'
    },
    {
      src: './fredpics/fredagain/IMG_0553.JPG',
      alt: 'IMG 0553'
    },
    {
      src: './fredpics/fredagain/IMG_0710 2.JPG',
      alt: 'IMG 0710'
    },
    {
      src: './fredpics/fredagain/IMG_0732.JPG',
      alt: 'IMG 0732'
    },
    {
      src: './fredpics/fredagain/IMG_1497.gif',
      alt: 'IMG 1497'
    },
    {
      src: './fredpics/fredagain/IMG_1787.gif',
      alt: 'IMG 1787'
    },
    {
      src: './fredpics/fredagain/IMG_1876.gif',
      alt: 'IMG 1876'
    },
    {
      src: './fredpics/fredagain/just stand there - downloaded from Lucy’s Deck & uploaded to Drive - Slide 9.png',
      alt: 'Just Stand There'
    },
    {
      src: './fredpics/fredagain/OBFRED-CHICAGO-03-1024x683.jpg',
      alt: 'OBFRED Chicago'
    },
    {
      src: './fredpics/fredagain/places to be cover downloaded from Warner Box - Slide 10.jpg',
      alt: 'Places to Be Cover'
    },
    {
      src: './fredpics/fredagain/ten days (single) art downloaded from warner box - slide 7.jpg',
      alt: 'Ten Days Single Art'
    },
    {
      src: './fredpics/fredagain/where will I be, downloaded from Lucy’s Deck & uploaded to Drive - Slide 13 .png',
      alt: 'Where Will I Be'
    }
  ];

  return (
    <div className="App">
      <Header />
      <ImageGrid images={images} />
      <ScrollingText />
      <Footer />
    </div>
  );
}

export default App;
