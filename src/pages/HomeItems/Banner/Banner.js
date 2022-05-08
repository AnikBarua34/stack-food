import * as React from 'react';
import Box from '@mui/material/Box';
import banner3 from '../../../images/banner 2.PNG';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import banner1 from '../../../images/banner pic.PNG';
import banner2 from '../../../images/banner pic 2.PNG';
import cart from '../../../images/foods/cart.png';
import AppBar from '@mui/material/AppBar';
import  Typography  from '@mui/material/Typography';
const Banner = () => {
    return (
        <>
        <Container
        sx={{marginTop:'80px'}}
        >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid item xs={6}>
     <img width="600px" height="300px" src={banner1} alt="banner1" />
        </Grid>
        <Grid item xs={6}>
        <img width="600px" height="300px" src={banner2} alt="banner2" />
        </Grid>
       
      </Grid>

    </Box>
    
    <img
        style={{position:"fixed",marginTop:'-90px',marginLeft:'1160px'}}
        src={cart} alt="cart"
        width="90px" height="64px"
        />
    <img width="1200px" height="160px" src={banner3} alt="banner3" />
    </Container>
        </>
  );
};

export default Banner;