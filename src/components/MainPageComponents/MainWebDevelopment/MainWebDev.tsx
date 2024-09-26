'use client';

import React from 'react';

import './mainwebdev.scss';
const MainWebDev: React.FC = () => {
    return (
        <div className='main__web'>
            <div className='main__web-title'>
             <span>Web</span> Development
            </div>
            <div className='main__web-subtitle'>
            that&apos;s where the <span>business</span> starts
            </div>
            <div className='main__web-link'>
            {'<'} Read More
            </div>
        </div>
    );
};

export default MainWebDev;
