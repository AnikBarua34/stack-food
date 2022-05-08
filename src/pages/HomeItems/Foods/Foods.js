import React, { useEffect, useState } from 'react';
import  Typography  from '@mui/material/Typography';
import Container from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import ReactPaginate from 'react-paginate';
import './Foods.css';

const Foods = () => {
    const [foods,setFoods] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pageVisited = pageNumber * userPerPage;
    const displayFoods = foods
        .slice(pageVisited, pageVisited + userPerPage)
        const pageCount = Math.ceil(foods.length / userPerPage);
        const changePage = ({ selected }) => {
            setPageNumber(selected);
        };
        // getting data 
    useEffect(()=>{
        fetch('./food.JSON')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        <>
        <Container sx={{marginTop:'10px'}}>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:"35px"}}
            
            >
                <div style={{color:'white', marginRight:"-25px",backgroundColor:'#EF7822',borderRadius:'18px',width:'160px',height:'36px',alignItems:'center',justifyContent:'center'}} >
                <Typography sx={{marginTop:'6px'}}>Veg</Typography>
                </div>

               <div style={{color:'#66717C',backgroundColor:'#F3F5F9',borderRadius:'18px',width:'160px',height:'36px',alignItems:'center',justifyContent:'center'}} >
               <Typography sx={{marginTop:'6px'}}>Non-Veg</Typography>
               </div>
            </div>

          <Typography sx={{fontSize:'18px',color:'#4B566B'}}>
            We found <span style={{color:'#EF7822',fontWeight:'800'}} >{foods.length}</span> food for you !   
            </Typography>  
        <Grid container>
            {
                displayFoods.map(food => 
                    <Grid item xs={6} sm={6} md={4} lg={3}
                    sx={{marginTop:'70px',width:'250px',height:'400px', alignItems:'center',justifyContent:'center'}}                
                    key={food.name} food={food}
                    >

                    <img width="250px" height="250px" src={food.image} alt="" />
                   {food.name} <br />
                   <span style={{display:"flex",justifyContent:'center'}}>
                   <span style={{fontSize:'14px',fontWeight:'700'}}>{food.rating}</span> <span style={{color:'#FE961C'}} ><StarOutlinedIcon style={{fontSize:'20px'}}/></span>
                   </span>


                    <span style={{justifyContent:'center',display:"flex"}}>
                    

                   <div>
                   <span style={{color:'#FF4B55',fontSize:'12px',marginTop:'5px',paddingTop:'36px'}}>
                    $ {food.oldPrice}
                    </span>
                    <span style={{marginLeft:'10px',fontSize:'18px'}}>
                    $ {food.newPrice}
                    </span>
                   </div>

                    <div style={{alignItems:'end', backgroundColor:"#EF7822",borderRadius:'30px 0px 10px',width:'60px',height:'60px',marginLeft:'85px'}}>
                    <ArrowRightAltTwoToneIcon style={{color:'white',padding:'10px',fontSize:'40px'}}/>
                    </div>
                    </span>
                </Grid>
                
                )
            }
        </Grid>
        <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
            </Container>
        </>
    );
};

export default Foods;