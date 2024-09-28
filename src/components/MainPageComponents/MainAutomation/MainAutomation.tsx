'use client';

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './mainautomation.scss';

const MainAutomation: React.FC = () => {
  return (
    <div className='main__automation'>
      {/* Параллакс для заголовка с className и кастомными стилями */}
      <Parallax speed={-3} className="parallax-title">
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
      <Parallax speed={-1} className="parallax-link">
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
