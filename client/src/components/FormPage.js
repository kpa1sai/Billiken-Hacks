import React, { useState } from 'react';
import './FormPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function FormPage() {
  const [formData, setFormData] = useState({
    // Initialize form data with default values
    monthlyIncome: 0,
    existingDebts: 0,
    personalExpenses: 0,
    creditScore: 0,
    investmentAmount: 0,
    loanAmount: 0
  });
  let navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/user', formData);
        console.log('Server Response:', response.data);
        navigate('/plans', {state : {_id: response.data._id, loanAmount: response.data.loanAmount}});
    } catch (error) {
        console.error('Error posting data:', error);
    }
  };

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 90px)' }}>
        <div style={{ width: '400px', padding: '25px' ,backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',           
        overflowY: 'auto', maxHeight: '110vh', margin: '20px auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Form Page</h2>
          <form style={{ display: 'grid', gap: '20px' }} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="monthlyIncome" style={{ display: 'block', marginBottom: '5px' }}>Monthly Income:</label>
              <input type="number" id="monthlyIncome" name="monthlyIncome" required style={{ width: '100%', padding: '8px' }} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="existingDebts" style={{ display: 'block', marginBottom: '5px' }}>Previous Debts:</label>
              <input type="number" id="existingDebts" name="existingDebts" required style={{ width: '100%', padding: '8px' }} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="personalExpenses" style={{ display: 'block', marginBottom: '5px' }}>Personal Expenses:</label>
              <input type="number" id="personalExpenses" name="personalExpenses" required style={{ width: '100%', padding: '8px' }} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="creditScore" style={{ display: 'block', marginBottom: '5px' }}>Credit Score:</label>
              <input type="number" id="creditScore" name="creditScore" required style={{ width: '100%', padding: '8px' }} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="loanAmount" style={{ display: 'block', marginBottom: '5px' }}>Loan Amount:</label>
              <input type="number" id="loanAmount" name="loanAmount" required style={{ width: '100%', padding: '8px' }} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="investmentAmount" style={{ display: 'block', marginBottom: '5px' }}>Investment Amount:</label>
              <input type="number" id="investmentAmount" name="investmentAmount" required style={{ width: '100%', padding: '8px' }} onChange={handleChange}/>
            </div>
            <button  type="submit" style={{ backgroundColor: '#7ec242', color: 'white', padding: '10px', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



export default FormPage;