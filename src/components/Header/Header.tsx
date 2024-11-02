'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '@/image/logo.svg';
import './header.scss';

interface HeaderProps {
    scrollToSection: (section: React.RefObject<HTMLDivElement>) => void;
    webDevRef: React.RefObject<HTMLDivElement>;
    web3Ref: React.RefObject<HTMLDivElement>;
    designRef: React.RefObject<HTMLDivElement>;
    automationRef: React.RefObject<HTMLDivElement>;
    handleOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({
    webDevRef,
    web3Ref,
    designRef,
    automationRef,
    handleOpen
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                logoRef.current && !logoRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <div className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}>
                <div className="header__logo" ref={logoRef} onClick={toggleMenu}>
                    <Image
                        src={logo.src}
                        alt="IcornA"
                        width={50} // Укажите ширину изображения
                        height={50} // Укажите высоту изображения
                    />
                </div>
                <nav ref={menuRef} className={`header__links ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header__links--open' : ''}`}>
                    <a className="header__link" onClick={() => handleScrollToSection(webDevRef)}>Web Development</a>
                    <a className="header__link" onClick={() => handleScrollToSection(web3Ref)}>Blockchain/Web3 Development</a>
                    <a className="header__link" onClick={() => handleScrollToSection(designRef)}>Design</a>
                    <a className="header__link" onClick={() => handleScrollToSection(automationRef)}>Automation</a>
                    <button className="contact-button" onClick={handleOpen}>
                        <div className="corner-top"></div>
                        <div className="corner-bottom"></div>
                        Get Free Audit
                    </button>
                </nav>
            </div>
            {isMenuOpen && <div className="overlay overlay--visible" />}
        </>
    );
};

export default Header;
