'use client';

import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainwebdev.scss';
import Image from 'next/image';
import BG from '@/image/MainPage/MainBgWeb.png'
const MainWebDev: React.FC = () => {
  const [parallaxSpeed, setParallaxSpeed] = useState(-7);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setParallaxSpeed(-7);
      } else {
        setParallaxSpeed(-3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='main__web'>
     <Image 
        src={BG} 
        alt="Website development company" 
        fill // Используйте новый формат атрибута fill
        className="main__web-bg"
        priority={true} 
      />
      <Parallax speed={-9}>
        <div className='main__web-title fade-in'>
          <span>Web</span> Development
        </div>
      </Parallax>
      <Parallax speed={-9}>
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

        <button id="gooey-button" className="fade-in delay-2">
          <a href="https://t.me/artem_icorna" style={{ zIndex: 10 }}>Contact Us</a>
          <span className="bubbles">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} className="bubble"></span>
            ))}
          </span>
        </button>
      </Parallax>
      <Parallax style={{paddingBottom:'40px'}} speed={parallaxSpeed}>
        <div className='main__web-subtitle fade-in delay-1'>
          that&apos;s where the <span>business</span> starts
        </div>
        <div className='main__web-link fade-in delay-3'>
          <a href="https://www.linkedin.com/company/icorna/?viewAsMember=true">{'<'} Read More</a>
        </div>
      </Parallax>
    </div>
  );
};

export default MainWebDev;
