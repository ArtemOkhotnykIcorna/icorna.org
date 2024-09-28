'use client';

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './maindesigne.scss';

const MainDesigne: React.FC = () => {
  return (
    <div className='main__designe'>
      {/* Параллакс для блока UI/UX с className и шириной */}
      <Parallax speed={-2} className="parallax-block">
        <div className='main__designe-block designe__block-ui'>
          <div className='main__designe-head'>
            <div className='main__designe-title'>
              Design
              <div className='main__designe-subtitle main__designe-ui'>
                <ul>
                  <li>UI/UX</li>
                  <li>Graphic</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className='main__designe-links'>
            <div className='main__designe-link'>
              <a href="#">
                <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> <span>U</span><span>s</span>
              </a>
            </div>
            <div className='main__designe-more'>
              <a href="#">
                <span>Read More</span>
              </a>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Параллакс для блока Interior с className и шириной */}
      <Parallax speed={2} className="parallax-block">
        <div className='main__designe-block designe__block-interior'>
          <div className='main__designe-head'>
            <div className='main__designe-title'>
              Design
              <div className='main__designe-subtitle'>
                Interior
              </div>
            </div>
          </div>
          <div className='main__designe-links'>
            <div className='main__designe-link purple-link'>
              <a href="#">
                <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> <span>U</span><span>s</span>
              </a>
            </div>
            <div className='main__designe-more purple-more'>
              <a href="#">
                <span>Read More</span>
              </a>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MainDesigne;
