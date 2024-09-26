'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from '@/image/logo.svg';
import './header.scss';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__logo">
                <img
                    src={logo.src}
                    alt="Logo"
                    className="h-8 w-8 mr-2"
                />
            </div>
            <nav className="header__links">
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
    );
};

export default Header;
