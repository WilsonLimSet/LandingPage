import React from 'react';
import Oura from './oura.png';

const OuraRingLogo = () => (
    <div style={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden' }}>
        <img src={Oura} alt="Profile picture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
);

export default OuraRingLogo;


