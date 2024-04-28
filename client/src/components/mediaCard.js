import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function MediaCard(props) {
    let history = useNavigate();

    const navigateToForm = () => {
      history('/form');
    };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={navigateToForm}>
      <CardMedia
        sx={{ height: 140 }}
        image = "../images/th.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Plans to save on Home Loan.
        </Typography>
      </CardContent>
    </Card>
  );
}
