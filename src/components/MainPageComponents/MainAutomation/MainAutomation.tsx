'use client';

import React from 'react';

import './mainautomation.scss';
const MainAutomation: React.FC = () => {
    return (
        <div className='main__automation'>
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
            <div className='main__automation-link'>
            <a>
                Read More {'>'}
                </a>
            </div>
            
            
        </div>
    );
};

export default MainAutomation;
