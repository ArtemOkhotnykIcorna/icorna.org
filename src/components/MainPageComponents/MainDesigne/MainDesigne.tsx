'use client';

import React from 'react';
import './maindesigne.scss';

const MainDesigne: React.FC = () => {
    return (
        <div className='main__designe'>
            <div className='main__designe-block designe__block-ui'>
                <div className='main__designe-head'>
                    <div className='main__designe-title'>
                        Design
                        <div className='main__designe-subtitle main__designe-ui'>
                            <ul>
                                <li>UI/UX</li>
                                <li>Graphic</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main__designe-block designe__block-interior'>
                <div className='main__designe-head'>
                    <div className='main__designe-title'>
                        Design
                        <div className='main__designe-subtitle'>
                            Interior
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDesigne;
