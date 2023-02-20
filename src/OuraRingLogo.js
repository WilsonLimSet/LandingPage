import React from 'react';
import Oura from './oura.png';

const OuraRingLogo = () => (
    <svg width="20px" height="20px" viewBox="0 0 20 20">
        <defs>
            <clipPath id="circle">
                <circle cx="50%" cy="50%" r="50%" />
            </clipPath>
        </defs>
        <image href={Oura} width="20" height="20" clipPath="url(#circle)" />
    </svg>
);

export default OuraRingLogo;




