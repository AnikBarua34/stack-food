import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import footerPic from '../../../images/foods/footerpic.PNG';
import  Grid  from '@mui/material/Grid';
import google from '../../../images/foods/google.PNG';
import google2 from '../../../images/foods/google2.PNG';
import sociial from '../../../images/foods/social pic.PNG';

export default function Footer() {
  
  return (
      <>
    
      <AppBar 
      style={{ background: '#343C4D'}}
      position="static">
          <Container>
    <Grid container sx={{marginTop:"10px",cursor:'pointer'}}>
            <Grid  item xs={6} sm={6} md={4} lg={4}>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            >
           <img height="24px" width="241px" src={footerPic} alt="" />
            </Typography>
            </Grid>

            <Grid  item xs={6} sm={6} md={4} lg={3}>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            >
           Follow us on <br />
           <img width='150px' src={sociial} alt="" />
            </Typography>
            </Grid>
            <Grid  item xs={6} sm={6} md={4} lg={5}>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{marginLeft:'300px',fontSize:'16px',fontWeight:'400',display: { xs: 'none', sm: 'block' } }}
            >
          <span style={{color:'#9EA2AA'}}>26/7 Helpline</span> <br />
          <span style={{fontSize:'26px'}}>+7603498768</span>
            </Typography>
            </Grid>
    </Grid>
    <Grid container sx={{marginTop:"10px",cursor:'pointer'}}>
        <Grid  item xs={6} sm={6} md={3} lg={4}>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{fontSize:'18px' ,display: { xs: 'none', sm: 'block' } }}
            >
          Download app to enjoy more<br />
          <span style={{color:'#FFFFFF',fontSize:'14px',opacity:'0.5'}}>Download our app from google play store & app store </span>
            </Typography>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{fontSize:"18px",fontWeight:'600', display: { xs: 'none', sm: 'block' } }}
            >
                <img width='140px' height='52px' src={google} alt="" />
                <img style={{marginLeft:'10px'}} width='140px' height='52px' src={google2} alt="" /> <br />
          Lets Connect !<br />
         <span style={{color:'#FFFFFF',fontSize:'14px',opacity:'0.5'}}>Stay up to date with restaurents and foods around you</span>
            </Typography>
        </Grid>
        <Grid item xs={2} sm={6} md={3} lg={3}>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontSize:'14px',fontWeight:'600', display: { xs: 'none', sm: 'block' } }}
            >
          MY ACCOUNT <br />
          Profile <br /> Address <br /> My Order <br /> Wallet <br />Loyality Points
            </Typography>
        </Grid>
        <Grid  item xs={2} sm={6} md={3} lg={3}>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{fontSize:'14px',fontWeight:'600', display: { xs: 'none', sm: 'block' } }}
            >
          OTHERS <br />
          Terms & Conditions <br /> Privacy Policy <br /> Help & Support <br /> About Us <br />Conatact Us
            </Typography>
        </Grid>
        <Grid  item xs={2} sm={6} md={3} lg={2}>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{fontSize:'14px',fontWeight:'600', display: { xs: 'none', sm: 'block' } }}
            >
          QUICK LINKS <br />
          Compaigns <br /> Restaurants <br /> Language
            </Typography>
        </Grid>
    </Grid>
        </Container>
      </AppBar>
      <div style={{backgroundColor:'#343C4D',opacity:'0.9'}}>
        <Container>
        <div style={{padding:'10px ',color:'white',display:'flex', justifyContent:'space-between'}}>
        <div>
                Copyright@ 2021 6am Tech
          </div>
          <div>
                Terms & conditions <span style={{marginLeft:'20px'}}>Privacy Policy</span>
          </div>
        </div>
        </Container>

      </div>
      </>
  );
}


