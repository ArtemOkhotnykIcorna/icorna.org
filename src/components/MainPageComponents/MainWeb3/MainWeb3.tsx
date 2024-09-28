'use client';

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainweb3.scss';

const MainWeb3: React.FC = () => {
  return (
    <div className='main__web3'>
      {/* Параллакс с небольшой скоростью для заголовка */}
      <Parallax speed={-2}>
        <div className='main__web3-title'>
          Blockchain/Web3 <span>Development</span>
        </div>
      </Parallax>

      {/* Параллакс для кнопки с небольшим движением */}
      <Parallax speed={2}>
        <div className='main__web3-button'>
          <span>Contact Us</span>
          <div className="wave"></div>
        </div>
      </Parallax>
    </div>
  );
};

export default MainWeb3;
