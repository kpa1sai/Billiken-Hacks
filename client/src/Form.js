import React from 'react';
import { useParams } from 'react-router-dom';
import logo from './logo.png'; // Make sure to import your logo image

const Form = () => {
  const { category } = useParams();

  return (
    <div>
      <header style={{ backgroundColor: '#000000', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Finance Hacks" style={{ height: '50px', marginRight: '20px' }} />
          <h1 style={{ color: '#7ec242', fontSize: '32px' }}>Finance Hacks</h1>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 90px)' }}>
        <div style={{ width: '400px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Form Page</h2>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>Selected Category: {category}</p>
          <form style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label htmlFor="monthlyIncome" style={{ display: 'block', marginBottom: '5px' }}>Monthly Income:</label>
              <input type="number" id="monthlyIncome" name="monthlyIncome" required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div>
              <label htmlFor="previousDebts" style={{ display: 'block', marginBottom: '5px' }}>Previous Debts:</label>
              <input type="number" id="previousDebts" name="previousDebts" required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div>
              <label htmlFor="personalExpenses" style={{ display: 'block', marginBottom: '5px' }}>Personal Expenses:</label>
              <input type="number" id="personalExpenses" name="personalExpenses" required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div>
              <label htmlFor="creditScore" style={{ display: 'block', marginBottom: '5px' }}>Credit Score:</label>
              <input type="number" id="creditScore" name="creditScore" required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div>
              <label htmlFor="loanAmount" style={{ display: 'block', marginBottom: '5px' }}>Loan Amount:</label>
              <input type="number" id="loanAmount" name="loanAmount" required style={{ width: '100%', padding: '8px' }} />
            </div>
            <div>
              <label htmlFor="investmentAmount" style={{ display: 'block', marginBottom: '5px' }}>Investment Amount:</label>
              <input type="number" id="investmentAmount" name="investmentAmount" required style={{ width: '100%', padding: '8px' }} />
            </div>
            <button type="submit" style={{ backgroundColor: '#7ec242', color: 'white', padding: '10px', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
