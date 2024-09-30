'use client';

import React, { useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainweb3.scss';
import Image from 'next/image';
import BG from '@/image/MainPage/MainBgWeb3.png'
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
      <Image 
        src={BG} 
        placeholder="blur"
        alt="Creation of web3 projects" 
        layout="fill" // Этот параметр делает изображение фоновым, занимая весь контейнер
        objectFit="cover" // Контролирует, как изображение масштабируется внутри контейнера
        className="main__web-bg"
        priority={true} // Если важно загружать это изображение первым
      />
      <Parallax speed={-8}>
        <div className='main__web3-title'>
          Blockchain/Web3 <span>Development</span>
        </div>
      </Parallax>
      <Parallax speed={-6}>
        <div className='main__web3-button'>
          <a href="https://t.me/artem_icorna">Contact Us</a>
          <div className="wave"></div>
        </div>
      </Parallax>
    </div>
  );
};

export default MainWeb3;
