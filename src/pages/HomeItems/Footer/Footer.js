// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Badge from '@mui/material/Badge';
// import navbarPic from '../../../images/navbar.icon.PNG';
// import  NotificationsIcon  from '@mui/icons-material/Notifications';
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LockIcon from '@mui/icons-material/Lock';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import Container from '@mui/material/Container';
// import footerPic from '../../../images/foods/footerpic.PNG';

// export default function Footer() {
  
//   return (
//     <Box>  
//       <AppBar 
//       style={{ background: '#343C4D'}}
//       position="static">
//           <Container>
//         <Toolbar>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//            <img height="24px" width="241px" src={footerPic} alt="" />
//           </Typography>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{marginLeft:'15px',color:'black',fontSize:'16px',fontFamily:'Signika Negative',fontWeight:'400', display: { xs: 'none', sm: 'block' } }}
//           >
//             Home
//           </Typography>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{marginLeft:'15px',color:'black',fontSize:'16px',fontFamily:'Signika Negative',fontWeight:'400', display: { xs: 'none', sm: 'block' } }}
//           >
//             Categories
//             <IconButton sx={{ p: 0 }}>
//               <ArrowDropDownIcon />
//             </IconButton>
//           </Typography>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{marginLeft:'15px',color:'black',fontSize:'16px',fontFamily:'Signika Negative',fontWeight:'400', display: { xs: 'none', sm: 'block' } }}
//           >
//             Restaurants
//             <IconButton sx={{ p: 0 }}>
//               <ArrowDropDownIcon />
//             </IconButton>
//           </Typography>     
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//           <IconButton
//               size="large"
//               color="inherit"
//             >
//               <Badge  color="error">
//                 <SearchOutlinedIcon sx={{color:"black"}} />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 1 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={1} color="error">
//                 <NotificationsIcon sx={{color:"black"}} />
//               </Badge>
//             </IconButton>
//             <IconButton size="large" aria-label="show 1 new mails" color="inherit">
//               <Badge badgeContent={1} color="error">
//                 <FavoriteIcon sx={{color:"black"}} />
//               </Badge>
//             </IconButton>
//             <Typography sx={{backgroundColor:"#EF7822",marginLeft:"5px" ,borderRadius:"5px",display:"flex",alignItems: "center",padding:"10px 15px",height:"20px",width:"80px"}}>
//                 <LockIcon/>
//                 Sign in
//             </Typography>
//           </Box>    
//         </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }

import React from 'react';
import footer from '../../../images/foods/footer.PNG'

const Footer = () => {
    return (
        <div>
            <img width='1345px' src={footer} alt="" />
        </div>
    );
};

export default Footer;
