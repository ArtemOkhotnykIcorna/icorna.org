'use client';

import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainwebdev.scss';

const MainWebDev: React.FC = () => {
  // Состояние для управления скоростью параллакса
  const [parallaxSpeed, setParallaxSpeed] = useState(-13);

  useEffect(() => {
    // Функция для определения ширины экрана и изменения скорости
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        // Для мобильных устройств
        setParallaxSpeed(-7);
      } else {
        // Для десктопов и планшетов
        setParallaxSpeed(-13);
      }
    };

    // Устанавливаем начальное значение при монтировании
    handleResize();

    // Слушаем изменения размера окна
    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='main__web'>
      {/* Параллакс с анимацией для заголовка */}
      <Parallax speed={-10}>
        <div className='main__web-title fade-in'>
          <span>Web</span> Development
        </div>
      </Parallax>

      {/* Параллакс для SVG и кнопки */}
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

        <button id="gooey-button" className="fade-in delay-2">
          <span style={{ zIndex: 10 }}>Contact Us</span>
          <span className="bubbles">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} className="bubble"></span>
            ))}
          </span>
        </button>
      </Parallax>

      {/* Параллакс для подзаголовка и ссылки с динамической скоростью */}
      <Parallax speed={parallaxSpeed}>
        <div className='main__web-subtitle fade-in delay-1'>
          that&apos;s where the <span>business</span> starts
        </div>
        <div className='main__web-link fade-in delay-3'>
          <a href="">{'<'} Read More</a>
        </div>
      </Parallax>
    </div>
  );
};

export default MainWebDev;
