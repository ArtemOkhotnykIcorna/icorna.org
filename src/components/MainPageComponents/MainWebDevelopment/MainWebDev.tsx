'use client';

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainwebdev.scss';

const MainWebDev: React.FC = () => {
  return (
    <div className='main__web'>
      {/* Параллакс с небольшой скоростью для заголовка */}
      <Parallax speed={-10}>
        <div className='main__web-title'>
          <span>Web</span> Development
        </div>
      </Parallax>
      <Parallax speed={-10}>
      <svg className='main__web-svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button id="gooey-button">
        <span style={{ zIndex: 10 }}>Contact Us</span>
        <span className="bubbles">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="bubble"></span>
          ))}
        </span>
      </button>
      </Parallax>
      {/* Параллакс для подзаголовка с небольшим движением */}
      <Parallax speed={-13}>
        <div className='main__web-subtitle'>
          that&apos;s where the <span>business</span> starts
        </div>
        <div className='main__web-link'>
            <a href="">{'<'} Read More</a>
        </div>
      </Parallax>

      {/* Параллакс для ссылки с небольшим движением */}
      
    </div>
  );
};

export default MainWebDev;
