import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Categories from './Categories';
import logo from './logo.png'; // Ensure the logo image is available in the src folder

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            
        </header>
    );
};

const MainContent = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const zipcode = document.getElementById('zipcode').value;
        console.log(`Submitted ZIP code: ${zipcode}`);
        navigate('/categories'); // Navigate to categories page on form submit
    };

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
                <div>
                    <button style={{ backgroundColor: '#7ec242', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }} onMouseOver={(e) => e.target.style.backgroundColor = '#9b6f3d'}>Login</button>
                    <button style={{ backgroundColor: '#7ec242', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }} onMouseOver={(e) => e.target.style.backgroundColor = '#9b6f3d'}>Sign Up</button>
                </div>
            </header>

            <main style={{ textAlign: 'center', padding: '20px' }}>
                <h2>"Find the key to your mortgage savings"</h2>
                <p>Unlock your lending destiny with a few simple questions - we'll be your matchmaker for the perfect lender and an unbeatable rate!</p>
                <div style={{ margin: '50px' }}></div>

                <div style={{
                    maxWidth: '400px', margin: '0 auto', padding: '20px',
                    border: '1px solid #ccc', borderRadius: '5px'
                }}>
                    <p>First, enter your ZIP code</p>
                    <form onSubmit={handleSubmit}>
                            <input type="text" id="zipcode" name="zipcode" pattern="[0-9]{5}" title="Please enter a 5-digit ZIP code" required />
                            <button type="submit" style={{
                            backgroundColor: '#7ec242', color: '#fff', border: 'none', padding: '10px 20px',
                            borderRadius: '5px', cursor: 'pointer', marginTop: '10px'
                        }}>Get Started</button>
                    </form>
                    <p>Disclosures</p>
                </div>
            </main>
            <Routes>
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </div>
    );
}


export default App;
