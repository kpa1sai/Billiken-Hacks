import * as React from 'react';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';

//import Typography from '@mui/material/Typography';
//import { useNavigate } from 'react-router-dom';


export default function MediaCard1(props) {

  return (
    <Card sx={{ maxWidth: 345 }} >
      <div>Annual Rate: {props.data.annualRate}</div>
      <div>Loan Tenure: {props.data.durationYears}</div>
      <div>EMI: {props.data.monthlyPayment}</div>
      <div>Total Interest: {props.data.totalInterestPaid}</div>
      <div>Total Payment: {props.data.totalPaid}</div>
      <div>Remainder: {props.data.investment.remainder}</div>
    </Card>
  );
}
