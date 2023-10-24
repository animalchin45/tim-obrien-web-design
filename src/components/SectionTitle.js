import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SectionTitle = ({ text }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.portfolio__section__title'),
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector('.portfolio__section__title'),
          start: 'bottom bottom',
          end: 'top center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className='portfolio__section__title-area' ref={ref}>
      <h3 className='portfolio__section__title'>{text}</h3>
    </div>
  );
};

export default SectionTitle;
