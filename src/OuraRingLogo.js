import React from 'react';
import Oura from './Oura.jpg';

const OuraRingLogo = () => (
    <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
        <img src={Oura} alt="Profile picture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
);

export default OuraRingLogo;


