import React, { useState, memo } from 'react';
import './Dots.css'

const ImageSlider = ({ slides, glow, greenglow, work }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  var sliderClasses = 'image';

  if (glow) {
    sliderClasses += ' glow';
  } if (greenglow) {
    sliderClasses += ' greenglow';
  } if (work) {
    sliderClasses += ' netlight';
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


  var left_arrow = 'fas fa-arrow-left';
  var right_arrow = 'fas fa-arrow-right';

  if(work) {
    left_arrow += ' work-left';
    right_arrow += ' work-right';
  }

  return (
    <section className='slider'>

    <i className={left_arrow} onClick={prevSlide}></i>
    <i className={right_arrow} onClick={nextSlide}></i>
   

      {slides.map((slide, index) => {

        var slideText = index === current ? 'img-text active' : 'img-text';
        if (work) {
          slideText += ' NLtext'
        }

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
          <h5 className={slideText}>{slide.text}</h5>
          </>
        );
      })}

    </section>
  );
};

export default ImageSlider;