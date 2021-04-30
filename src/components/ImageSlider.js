import React, { useState, memo } from 'react';
import './Dots.css'

const ImageSlider = ({ slides, glow, greenglow }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  var sliderClasses = 'image';

  if (glow) {
    sliderClasses += ' glow';
  } if (greenglow) {
    sliderClasses += ' greenglow';
  }

/*----------DOTS----------*/

  const Dot = ({ active }) => {
  return (
    <span className='dot' style={{background: active ? '#49a6a6' : '#d8f2f2'}}/>
  )
};

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide }) => {
  return (
    <div className='dots'>
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
};
/*----------DOTS END----------*/

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
    <i className="fas fa-arrow-left" onClick={prevSlide}></i>
    <i className="fas fa-arrow-right" onClick={nextSlide}></i>
   

      {slides.map((slide, index) => {
        return (
          <>
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            >
            {index === current && (
              <img src={slide.image} alt='project_image' className={sliderClasses}/>
            )}
          </div>
          <Dots slides={slides} activeSlide={current} /> 
          <h5 className={index === current ? 'img-text active' : 'img-text'}>{slide.text}</h5>
          </>
        );
      })}

    </section>
  );
};

export default ImageSlider;