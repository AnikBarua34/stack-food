import * as React from 'react';
import Box from '@mui/material/Box';
import banner3 from '../../../images/banner 2.PNG';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import banner1 from '../../../images/banner pic.PNG';
import banner2 from '../../../images/banner pic 2.PNG';
import cart from '../../../images/foods/cart.png';
import './Banner.css';
const Banner = () => {
    return (
        <>
        <Container
        sx={{marginTop:'20px'}}
        >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid className='grid' item xs={12} lg={6}>
     <img className='banner1' src={banner1} alt="banner1" />
        </Grid>
        <Grid item xs={12} lg={6}>
        <img className='banner2' src={banner2} alt="banner2" />
        </Grid>
       
      </Grid>

    </Box>
    
    <img
    className='cart'
        src={cart} alt="cart"
        />
    <img className='banner3' src={banner3} alt="banner3" />
    </Container>
        </>
  );
};

export default Banner;