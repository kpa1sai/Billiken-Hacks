import React from 'react';

function Investment({ sendDataToParent }) {
  const handleClick = () => {
    const interestRate = 7;
    sendDataToParent(interestRate); // Send data back to parent component
  };
  const handleClick1 = () => {
    const interestRate = 12;
    sendDataToParent(interestRate); // Send data back to parent component
  };
  const handleClick2 = () => {
    const interestRate = 18;
    sendDataToParent(interestRate); // Send data back to parent component
  };

  return (
    <div>
      <button onClick={handleClick}>Low Risk</button>
      <button onClick={handleClick1}>Medium Risk</button>
      <button onClick={handleClick2}>High Risk</button>
    </div>
  );
}

export default Investment;