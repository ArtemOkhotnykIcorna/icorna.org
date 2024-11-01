'use client';

import React, { useState, useEffect, useRef } from 'react';
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
    const [modalOpen, setModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const handleClose = () => setModalOpen(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                logoRef.current && !logoRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false); // Закрываем меню при клике вне его области
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousedown', handleClickOutside); // Слушаем клик вне меню

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Toggle the mobile menu (open or close when clicking logo)
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Меняем состояние на противоположное
    };

    // Функция для плавного скролла к секции
    const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Закрываем меню после клика на ссылку
        }
    };

    return (
        <>
            <div className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}>
                <div className="header__logo" ref={logoRef} onClick={toggleMenu}>
                    <img
                        src={logo.src}
                        alt="IcornA"
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
            {/* Overlay layer for blur effect */}
            {isMenuOpen && <div className="overlay overlay--visible" />}
        </>
    );
};

export default Header;
