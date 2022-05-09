import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from 'react';
import './Locations.css';
import IconButton from '@mui/material/IconButton';
import flag from '../../../images/foods/flag.PNG';
import map from '../../../images/foods/map.png';
import { Container } from '@mui/material';
const Locations = () => {
    return (
        <>
        <Container>
        <div className='mainDiv' style={{display:'flex'}}>
        <Typography
        className='location2'
        >
            <img className='map' src={map} alt="" /> 63 labroratory Rd, Dhaka 1205... <IconButton sx={{ p: 0 }}>
              <ArrowDropDownIcon />
            </IconButton>
        
        </Typography>
        <span>
        <div></div>
        <Typography>
            <span style={{color:"black"}}>&#x1F4DE;</span>
        +565889023795 <img style={{marginLeft:"15px"}} className='flag' src={flag} alt="" /> <span>English</span> <IconButton sx={{ p: 0 }}>
              <ArrowDropDownIcon />
            </IconButton>
        </Typography>
        </span>
     
        </div>
        </Container>
        </>
    );
};

export default Locations;