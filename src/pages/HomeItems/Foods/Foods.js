import React, { useEffect, useState } from 'react';
import  Typography  from '@mui/material/Typography';
import Container from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ReactPaginate from 'react-paginate';
import './Foods.css';
import { Paper }  from '@mui/material';
import arrow from '../../../images/foods/arrow.png';
import grid from '../../../images/foods/griid.png';
import sort from '../../../images/foods/sort.png';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


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

    const handleArrow= ()=>{
        alert('Details comming soon')
    }
    return (
        <>
        <Container className='container'>

            <div className='nestedContainer'>
                <div className='items1'>
                    <div style={{marginRight:"15px",backgroundColor:"#EF7822",color:"white",padding:'10px 18px 10px 18px',borderRadius:"5px"}}>All</div>
                    <div style={{marginRight:"15px",padding:'10px 18px 10px 18px',borderRadius:"5px"}}>Burger</div>
                    <div style={{marginRight:"15px",padding:'10px 18px 10px 18px',borderRadius:"5px"}}>Japanese</div>
                    <div style={{marginRight:"15px",padding:'10px 18px 10px 18px',borderRadius:"5px"}}>Asian</div>
                    <div style={{marginRight:"15px",padding:'10px 18px 10px 18px',borderRadius:"5px"}}>Pasta</div>
                    <div style={{marginRight:"15px",padding:'10px 18px 10px 18px',borderRadius:"5px"}}>Noodles</div> 
                    <div style={{marginRight:"15px",padding:'10px 18px 10px 18px',borderRadius:"5px"}}>Mexican Food</div> 
                </div>
                
                <div className='items2'>
                <div style={{padding:'10px 18px 10px 18px',borderRadius:"5px"}}>
                <img style={{marginRight:'3px'}}  width="14px" height='14px' src={grid} alt="" />Show Grid: 20</div> <IconButton sx={{ p: 0 }}>
              <ArrowDropDownIcon />
            </IconButton>
                </div>

                <div className='items3'>
                        <div style={{padding:'10px 18px 10px 18px',borderRadius:"5px"}}> 
                        <img style={{marginRight:'3px'}} width="14px" height='14px' src={sort} alt="" />Sort by: Default</div> <IconButton sx={{ p: 0 }}>
                         <ArrowDropDownIcon />
                        </IconButton>
                        </div>
                </div>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:"35px"}}           
            >
                <div style={{color:'white', marginRight:"-25px",backgroundColor:'#EF7822',borderRadius:'18px',width:'160px',height:'36px',alignItems:'center',justifyContent:'center'}} >
                <Typography sx={{marginTop:'6px'}}>Veg</Typography>
                </div>
               <div style={{color:'#66717C',backgroundColor:'#F3F5F9',borderRadius:'18px',width:'160px',height:'36px',alignItems:'center',justifyContent:'center'}} >
               <Typography sx={{marginTop:'6px'}}>Non-Veg</Typography>
               </div>
            </div>
          <Typography className='found' sx={{fontSize:'18px',color:'#4B566B'}}>
            We found <span style={{color:'#EF7822',fontWeight:'800'}} >{foods.length}</span> food for you !   
            </Typography>  
        <Grid container>
            {
                displayFoods.map(food => 
                    <Grid  item xs={6} sm={6} md={4} lg={3}
                    sx={{marginTop:'50px',alignItems:'center',justifyContent:'center'}}                
                    key={food.name} food={food}
                    >
                    <Paper className='paper'  sx={{marginLeft:'35px',width:'250px',height:'400px',border:'1px solid #FFEBDD'}}>                       
                    <img className='foodImage' src={food.image} alt="" />
                   <span className='foodName'>{food.name} <br /></span>
                   <span className='foodType'>{food.type}</span>
                   <span style={{display:"flex",justifyContent:'center'}}>
                   <span style={{fontSize:'14px',fontWeight:'700'}}>{food.rating}</span> <span style={{color:'#FE961C'}} ><StarOutlinedIcon style={{fontSize:'20px'}}/></span>
                   </span>
                    <span style={{justifyContent:'center',display:"flex"}}>
                   <div style={{marginTop:"40px"}}>
                   <span style={{color:'#FF4B55',fontSize:'12px',marginTop:'5px',paddingTop:'36px'}}>
                   <del> {food.oldPrice}</del>
                   </span>
                    <span style={{marginLeft:"10px",fontSize:'18px'}}>
                    {food.newPrice}
                    </span>
                   </div>
                    <div  onClick={handleArrow} className={`${food.note === 'New'? "backgroundFill":"backgroundEmpty"}`}>
                    <span id='arrow' >
                    <img  className={`${food.note==="New"?"arrowWhite":"arrowColor"}`} width="25px" height="21px" src={arrow} alt="arrow pic" />
                    </span>
                    </div>
                    </span>
                        </Paper>
                </Grid>
                
                )
            }
        </Grid>
        <div style={{marginTop:'30px'}}>
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
        </div>
            </Container>
        </>
    );
};

export default Foods;