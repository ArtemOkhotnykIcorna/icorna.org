'use client';

import React, { useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainweb3.scss';

const MainWeb3: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.main__web3');
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
    <div className='main__web3'>
      <Parallax speed={-8}>
        <div className='main__web3-title'>
          Blockchain/Web3 <span>Development</span>
        </div>
      </Parallax>
      <Parallax speed={-6}>
        <div className='main__web3-button'>
          <span>Contact Us</span>
          <div className="wave"></div>
        </div>
      </Parallax>
    </div>
  );
};

export default MainWeb3;
