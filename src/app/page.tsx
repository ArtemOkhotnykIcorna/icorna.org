'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import MainWeb3 from '@/components/MainPageComponents/MainWeb3/MainWeb3';
import MainWebDev from '@/components/MainPageComponents/MainWebDevelopment/MainWebDev';
import MainDesigne from '@/components/MainPageComponents/MainDesigne/MainDesigne';
import MainAutomation from '@/components/MainPageComponents/MainAutomation/MainAutomation';
import './globals.css';

const MainPage = () => {
  return (
    <ParallaxProvider >
      <div className="main">
        <MainWebDev />
        <MainWeb3 />
        <MainDesigne />
        <MainAutomation />
      </div>
    </ParallaxProvider>
  );
};

export default MainPage;
