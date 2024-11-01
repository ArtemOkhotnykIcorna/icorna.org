'use client';

import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './globals.css';
import '@/components/ContactModal/contactbutton.scss';
import ContactModal from '@/components/ContactModal/ContactModal';

const MainWeb3 = dynamic(() => import('@/components/MainPageComponents/MainWeb3/MainWeb3'), { ssr: false });
const MainDesigne = dynamic(() => import('@/components/MainPageComponents/MainDesigne/MainDesigne'), { ssr: false });
const MainAutomation = dynamic(() => import('@/components/MainPageComponents/MainAutomation/MainAutomation'), { ssr: false });
const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });
import IcornA from '@/image/logo.svg'
import Head from 'next/head';
import MainWebDev from '@/components/MainPageComponents/MainWebDevelopment/MainWebDev';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const webDevRef = useRef<HTMLDivElement>(null);
  const web3Ref = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const automationRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ParallaxProvider>
      <Head>
        <title>Main Page - IcornA</title>
        <meta name="description" content="Main page content" />
        <link rel="preload" href={IcornA.src} as="image" />
        <link rel="preconnect" href="https://your-cdn.com" />
      </Head>
      <Header
        scrollToSection={scrollToSection}
        webDevRef={webDevRef}
        web3Ref={web3Ref}
        designRef={designRef}
        automationRef={automationRef}
      />
      <div className="main">
        <div ref={webDevRef}>
          <MainWebDev />
        </div>
        <div ref={web3Ref}>
          <MainWeb3 />
        </div>
        <div ref={designRef}>
          <MainDesigne />
        </div>
        <div ref={automationRef}>
          <MainAutomation />
        </div>
        <button className="contact-button" onClick={handleOpen}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get Free Audit
        </button>
        {/* Contact Modal */}
        <ContactModal open={modalOpen} handleClose={handleClose} />
      </div>
      <Footer />
    </ParallaxProvider>
  );
};

export default MainPage;
