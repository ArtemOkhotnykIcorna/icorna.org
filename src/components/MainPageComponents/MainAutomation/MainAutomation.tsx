'use client';

import React  ,{ useEffect}from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainautomation.scss';

const MainAutomation: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.main__automation');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();

        // Добавляем проверку, чтобы элемент стал видимым, когда верхняя часть попадет в область видимости
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='main__automation'>
      {/* Параллакс для заголовка с className и кастомными стилями */}
      <Parallax speed={-9} className="parallax-title">
        <div className='main__automation-title'>
          Automation
          <div className='main__automation-subtitle'>
            <div>
              <span>Business</span> processes and accounting
            </div>
            <div>
              This is<span> your savings</span>
            </div>
          </div>
        </div>
        <div className="button-container-3">
          <span className="mas">Contact us</span>
          <button type="button" name="Hover">Contact us</button>
        </div>
      </Parallax>

      {/* Параллакс для ссылки с className */}
      <Parallax speed={-4} className="parallax-link">
        <div className='main__automation-link'>
          <a href="#">
            Read More {'>'}
          </a>
        </div>
      </Parallax>
    </div>
  );
};

export default MainAutomation;
