//import MediaCard from "./mediaCard";
import './Plan.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MediaCard1 from "./mediaCard1";

const getData = {
    "loanDurations": [5,10,15],
    "loanAmount": 3000,
    "annualRate": 12,
    "userId" : 0
};
/*
async function fetchData(_id, getData) {
    try {
      const response = await axios.post('http://localhost:5000/api/user/calculate-loans/' + _id, getData);
      // Handle the response from the server
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching data: ', error);
      // Optionally, you can rethrow the error to handle it in the calling code
      throw error;
    }
}

async function processData(_id, getData) {
    try {
      const responseData = await fetchData(_id, getData);
      // Use the response data here or pass it to another function
      console.log('Processed data: ', responseData);
    } catch (error) {
      // Handle errors if needed
      console.error('Error processing data: ', error);
    }
  }


const Plan = () => {
    const location = useLocation();
    const data = location.state;
    const _id = data.data;
    console.log(_id);
    getData.userId = _id;
    getData.loanAmount = data.loanAmount;
    const responseData = processData(_id, getData);
    console.log(responseData);
    
    return (
            <>
            
            <div class="flex-container">
                <div class="flex-item"> <MediaCard text="Home Loan"/> </div>
                <div class="flex-item"> <MediaCard text="Car Loan"/> </div>
                <div class="flex-item"> <MediaCard text="Gold Loan"/> </div>
            </div>
            
            </>

    );
}
*/

const Plan = () => {
    const location = useLocation();
    const data = location.state;
    const _id = data._id;
    getData.userId = data._id;
    getData.loanAmount = data.loanAmount;
    console.log(_id);
    const [responseData, setResponseData] = useState(null); // State to store the response data
    const [error, setError] = useState(null); // State to store any errors

    // Function to fetch and process data
    async function fetchDataAndProcess(_id, getData) {
        try {
            const response = await axios.post(`http://localhost:5000/api/user/calculate-loans/${_id}`, getData);
            setResponseData(response.data); // Set the response data in state
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error); // Set error in state
        }
    }

    // useEffect to trigger fetchDataAndProcess when component mounts
    useEffect(() => {
        fetchDataAndProcess(_id, getData);
    }, [_id]); // Dependencies array to control re-fetching

    // Conditional rendering based on the state of responseData and error
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!responseData) {
        return <div>Loading...</div>;
    }
    console.log(responseData);

    return (
        <>
            <div className="flex-container">
                <div className="flex-item"><MediaCard1 data = {responseData.calculations[0]} /></div>
                <div className="flex-item"><MediaCard1 data = {responseData.calculations[1]} /></div>
                <div className="flex-item"><MediaCard1 data = {responseData.calculations[2]} /></div>
            </div>

        </>
    );
};


export default Plan ;