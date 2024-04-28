import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'; // Ensure the logo path is correct!

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/form/${category}`);
  };

  return (
    <div>
      <header style={{ background: '#030d16', padding: '20px', display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="App Logo" style={{ maxHeight: '50px', marginRight: '10px' }} />
        <h1 style={{ margin: 0, color: '#7ec242', fontFamily: 'Arial, sans-serif' }}>Finance Hacks</h1>
      </header>

      <main style={{ padding: '20px', fontSize: '16px', lineHeight: '1.6', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif' }}>Categories</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', color: '#666' }}>Select a category that best fits your needs:</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div
            style={{
              width: '45%',
              minWidth: '300px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              margin: '10px',
              cursor: 'pointer',
              color: '#7ec242',
              transition: 'transform 0.3s',
            }}
            onClick={() => handleCategoryClick('Car-Luxury-Goods')}
          >
            <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', marginBottom: '10px' }}>Car/Luxury Goods</h3>
             </div>
          <div
            style={{
              width: '45%',
              minWidth: '300px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              margin: '10px',
              cursor: 'pointer',
              color: '#7ec242',
              transition: 'transform 0.3s',
            }}
            onClick={() => handleCategoryClick('New-Home-Purchase')}
          >
            <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', marginBottom: '10px' }}>New Home Purchase</h3>
            </div>
          <div
            style={{
              width: '45%',
              minWidth: '300px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              margin: '10px',
              cursor: 'pointer',
              color: '#7ec242',
              transition: 'transform 0.3s',
            }}
            onClick={() => handleCategoryClick('Gold-Investment')}
          >
            <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', marginBottom: '10px' }}>Gold Investment</h3>
           </div>
        </div>
      </main>
    </div>
  );
}

export default Categories;
