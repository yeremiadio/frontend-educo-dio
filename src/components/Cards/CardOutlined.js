import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardOutlined(props) {
  return (
      <Card variant={props.variantcard} sx={{backgroundColor: "GrayText"}}>
        <React.Fragment>
          <CardContent>
              <Typography 
                  sx={{ fontSize: 14, fontFamily: "cursive" }} 
                  color={props.colorlabel} 
                  gutterBottom
              >
                  {props.label}
              </Typography>
            <Typography variant={props.varianttitle} sx={{ fontSize: 50, fontFamily: "fantasy" }} gutterBottom>
              {props.title}
            </Typography>
            <Typography variant={props.variantbody} textAlign="justify" sx={{ fontSize: 20, fontFamily: "sans-serif"}} gutterBottom>
              {props.body}
            </Typography>
            <Button
              size={props.sizebutton}
              onClick={props.onClick}
              variant={props.variant} 
              sx={{color: "ButtonShadow", fontSize: 20}}
            >
              {props.titlebutton}
            </Button>
          </CardContent>
        </React.Fragment>
      </Card>
  );
}