'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import logo from '@/image/logo.svg';
import './header.scss';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

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

    return (
        <>
            <div className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}>
                <div className="header__logo" ref={logoRef} onClick={toggleMenu}>
                    <img
                        src={logo.src}
                        alt="Logo"
                    />
                </div>
                <nav ref={menuRef} className={`header__links ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header__links--open' : ''}`}>
                    <Link href="/about" className="header__link">
                        About
                    </Link>
                    <Link href="/web-development" className="header__link">
                        Web Development
                    </Link>
                    <Link href="/blockchain-development" className="header__link">
                        Blockchain/Web3 Development
                    </Link>
                    <Link href="/design" className="header__link">
                        Design
                    </Link>
                    <Link href="/automation" className="header__link">
                        Automation
                    </Link>
                </nav>
            </div>
            {/* Overlay layer for blur effect */}
            {isMenuOpen && <div className="overlay overlay--visible" />}
        </>
    );
};

export default Header;
