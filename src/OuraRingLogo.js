import React from 'react';
import Oura from './oura.png';

const OuraRingLogo = () => (
    <div style={{ width: '20px', height: '20px', overflow: 'hidden' , borderRadius: '50%'}}>
        <img src={Oura} alt="Profile picture" style={{ width: '100%', height: '100%', objectFit: 'cover',  clipPath: 'circle(50% at 50% 50%)' }} />
    </div>
);

export default OuraRingLogo;


