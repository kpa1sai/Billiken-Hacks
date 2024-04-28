import {React, useState} from 'react';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Investment from './Investment';
//import Typography from '@mui/material/Typography';
//import { useState } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      margin: 'auto',
      marginTop: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    content: {
      padding: '16px',
    },
    item: {
      marginBottom: '10px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    },
    value: {
      fontSize: '16px',
      color: '#555',
    },
  });

function MediaCard1(props) {
  const classes = useStyles();
  //const { annualRate, durationYears, monthlyPayment, totalInterestPaid, totalPaid, remainder, interest, investmentInterest } = props.data;

  const [dataFromChild, setDataFromChild] = useState(null);

  // Event handler function to receive data from child component
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const moneyToSave = props.data.investment.remainder;
  const tenure = props.data.durationYears*12;
  const interestRate =  props.data.annualRate / 12 /100;
  const emi = props.data.monthlyPayment;

      
  const powerFactor = Math.pow(1 + interestRate, tenure);
  const principal = emi / ((interestRate * powerFactor) / (powerFactor - 1));
  const interest = emi*tenure - principal;

  const investmentInterestRate = dataFromChild/ 12/ 100;

  const amount = moneyToSave * tenure * Math.pow((1 + investmentInterestRate),  tenure);
  const investmentInterest = amount - moneyToSave * tenure;


  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} gutterBottom>
          Loan Details
        </Typography>
        <Box className={classes.item}>
          <Typography className={classes.value}>Annual Rate: {props.data.annualRate}%</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Loan Tenure: {props.data.durationYears} years</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>EMI: {props.data.monthlyPayment}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Total Interest: {props.data.totalInterestPaid}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Total Payment: {props.data.totalPaid}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Remainder: {props.data.investment.remainder}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Interest: {interest}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>==========================</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Rules: {props.data.rules.name}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Limit: {props.data.rules.suggestedLimit}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Total Loan Limit: {props.data.rules.suggestedTotalLoanLimit}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Cash After Loan: {props.data.rules.cashAfterLoan}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.value}>Exceeds limit: {props.data.rules.exceedsLimit}</Typography>
        </Box>
        {/* Assuming Investment is another component */}
        <Investment sendDataToParent={handleDataFromChild}/>
        <Box className={classes.item}>
          <Typography className={classes.value}>Invested Interest: {investmentInterest}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MediaCard1;
