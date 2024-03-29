import React, { useState } from 'react';

/* global window */

const Top = () => {
  const [showArrow, setShowArrow] = useState(false);
  const changeShowArrow = () => {
    if (window.scrollY >= 80) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };
  window.addEventListener('scroll', changeShowArrow);

  return (
    <div className='top__container'>
      <a href='#top' className={showArrow ? 'top' : 'top--hide'}>
        <i className='fas fa-chevron-up' />
      </a>
    </div>
  );
};

export default Top;
