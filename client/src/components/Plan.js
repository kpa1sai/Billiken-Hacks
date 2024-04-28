import MediaCard from "./mediaCard";
import './Plan.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const getData = {
    "loanDurations": [5,10,15],
    "loanAmount": 3000,
    "annualRate": 12,
    "userId" : 0
};

function fetchData(_id) {
    console.log(_id);
   axios.post('http://localhost:5000/api/user' + '/calculate-loans/' + _id, getData)
  .then(response => {
    // Handle the response from the server
    console.log(response.data);
    return response.data;
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error fetching data: ', error);
  });
}

const Plan = () => {
    const location = useLocation();
    const data = location.state;
    const _id = data.data;
    console.log(_id);
    getData.userId = _id;
    getData.loanAmount = data.loanAmount;
    const responseData = fetchData(_id)
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

export default Plan ;