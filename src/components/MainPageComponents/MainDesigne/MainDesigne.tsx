import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './maindesigne.scss';

const MainDesigne: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax-block');
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
    handleScroll(); // Вызываем для первоначальной проверки

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main__designe'>
      {/* Параллакс для блока UI/UX с анимацией */}
      <Parallax speed={-3} className="parallax-block fade-in-left">
        <div className='main__designe-block designe__block-ui'>
          <div className='main__designe-head'>
          <Parallax className='parallax-block__designe-title' speed={-6}>
            <div className='main__designe-title'>
              Design
              <div className='main__designe-subtitle main__designe-ui'>
                <ul>
                  <li>UI/UX</li>
                  <li>Graphic</li>
                </ul>
              </div>
            </div>
            </Parallax>
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

      {/* Параллакс для блока Interior с анимацией */}
      <Parallax speed={3} className="parallax-block fade-in-right">
        <div className='main__designe-block designe__block-interior'>
          <div className='main__designe-head'>
          <Parallax className='parallax-block__designe-title' speed={-6}>
            <div className='main__designe-title'>
              Design
              <div className='main__designe-subtitle'>
                Interior
              </div>
            </div>
            </Parallax>
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
