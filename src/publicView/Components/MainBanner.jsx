import * as React from 'react';
import { Box, Container, Grid, Typography, styled, Paper  } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

export default function MainBanner() {

  const items = [
    {
        name: "Banner1",
        image: "./assets/banner1.png"
    },
    {
        name: "Banner2",
        image: "./assets/banner1.png"
    },
    {
        name: "Banner3",
        image: "./assets/banner1.png"
    },

];

  return (
    <Carousel >
      {items.map(({name,image}) => (
        <Paper key={name} sx={{height:{lg:'400px', xs:'200px'}}} >
          <img src={image} alt={name} width="100%" height="100%" />
        </Paper> 
      ))}
    </Carousel>
  );
}
