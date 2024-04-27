import React from 'react';
import logo from './logo.png';

const Options = () => {
    return (
        <div>
            <header style={{
                backgroundColor: '#333', color: '#fff', padding: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Finance Hacks" style={{ height: '50px', marginRight: '20px' }} />
                    <h1 style={{ color: '#7ec242' }}>Finance Hacks</h1>
                </div>
            </header>
            
            <main style={{ textAlign: 'center', padding: '20px' }}>
                <h2>Choose your interest:</h2>
                <div style={{
                    display: 'flex', justifyContent: 'space-around', padding: '20px'
                }}>
                    <button>Home</button>
                    <button>Car</button>
                    <button>Gold</button>
                </div>
            </main>
        </div>
    );
}

export default Options;
