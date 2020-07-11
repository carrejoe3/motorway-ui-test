import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './CarCards.css';

const CarCards = (props) => {
  return (
    <Card className="carCard">
      <CardMedia
        image={props.imgSrc}
        alt="Car"
        className="carImage"
        component="img"
        height="200"
      />
    </Card>
  )
}

export default CarCards
