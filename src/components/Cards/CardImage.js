import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function CardImage(props) {
  return (
    <Card >
      <CardMedia
        component={props.component}
        alt={props.alt}
        src={props.src}
        
      />
    </Card>
  );
}