import React from 'react';
import Oura from './oura.png';

const OuraRingLogo = () => (
    <div style={{ width: '20px', height: '20px', overflow: 'hidden' }}>
        <img src={Oura} alt="Profile picture" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
    </div>
);

export default OuraRingLogo;


