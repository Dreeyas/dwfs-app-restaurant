import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlledCarousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='paddings innerWidth aboutus'>
      <h1 className='carousel-title'>About <span>Mitsuito's Ramen Bar</span></h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="slider1.jpg"
          alt="First slide"
          style={{ maxWidth: '100%', maxHeight: '500px' }}
        />
        <Carousel.Caption>
          <h2 className='slider-title1'>A dark and stormy night,</h2>
          <h3 className='slider-title2'>and a dream in drunkenness...</h3>
          <p className='slider-p'>It was in the fall of 2013 when Mitsui, Ha-Yoon, Ayane and Ji-Yeon found themselves drenched in warm sake and laughing uproariously as if there were no tomorrow. All passionate about gastronomy and absolutely smitten by the charms of ramen. In the heart of the city, where neon lights sparkled like fallen stars from the sky, the legendary Mitsuito's Ramen Bar was born.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="slider2.jpg"
          alt="Second slide"
          style={{ maxWidth: '100%', maxHeight: '500px' }}
        />
        <Carousel.Caption>
          <h2 className='slider-title1'>Four friends,</h2>
          <h3 className='slider-title2'>one idea...</h3>
          <p className='slider-p'>The four friends, each with their own love story with ramen, shared their dreams of creating the place of their dreams. Mitsui, the wizard of perfectly cooked noodles revealed his centuries-old secret, Ha-Yoon confessed his obsession with finding the perfect balance between with spiciness of Korean cuisine and the smoothness of Japanese ramen. Ayane, the queen of flavor combinations and savory broths showed her notebook filled with wild ideas. And Ji-Yeon, the presentation expert, unveiled her ability to make every dish a work of art.
</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="slider3.jpg"
          alt="Third slide"
          style={{ maxWidth: '100%', maxHeight: '500px' }}
        />
        <Carousel.Caption>
          <h2 className='slider-title1'>A night to remember</h2>
          <h3 className='slider-title2'>and the dream comes true</h3>
          <p className='slider-p'>The night wore on, and the friends went from euphoria to culinary ecstasy, mixing ingredients, tasting sauces, and planning the perfect menu. They laughed, argued, and, finally, reached an agreement. Mitsuito's Ramen Bar would be the name to honor their friendship and their shared passion.
</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="slider4.jpg"
          alt="Fourth slide"
          style={{ maxWidth: '100%', maxHeight: '500px' }}
        />
        <Carousel.Caption>
          <h2 className='slider-title1'>It's called Mitsuito's Ramen Bar</h2>
          <h3 className='slider-title2'>but the specialty is love</h3>
          <p className='slider-p'>Thus, Mitsuito's Ramen Bar became a sacred corner for ramen lovers, where each dish told the tale of a friendship forged in the storm and blossomed in the shared passion for Japanese cuisine. And though time passed and storms came and went, the flame of Mitsuito's Ramen Bar never extinguished, lighting up the hungry hearts of all who entered through its door.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;