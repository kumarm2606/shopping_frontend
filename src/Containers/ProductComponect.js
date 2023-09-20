import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Menu,
  MenuItem
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CreateProduct from "./CreateProduct";
const options = [
"Edit","Delete"
];

const ProductComponect = () => {
  const navigate =useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userData =useSelector((state) => state.user)
  const [data,setData]=useState({})
  const [modal,setModal]=useState(false)
  const handleClick = (event,id) => {
    setData(id)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    if(option==="Edit"){
      setModal(true)
    }else{
      
    }
    setAnchorEl(null);
  };
  const product = useSelector((state) => state.allProducts.products);
  const reduserList = product?.map((data) => {
    const { id, title, image, category, description, price } = data;
    return (
      <Grid item xs={4} key={id} >
          <Card sx={{ maxWidth: 250, maxHeight: 250 }}>
            <CardActionArea>
           { userData.status && <MoreVertIcon
            className="iconimage"
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={(e)=>handleClick(e,data)}
               />}
               <div onClick={()=>navigate(`/productDetil/${id}`)} >
              <CardMedia
                component="img"
                height="140"
                width="80%"
                image="https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928_1280.jpg"
                alt="green iguana"
                className="listImage"
              />
              <CardContent>
                <div className="content">
                  <div className="header cut-text">{title}</div>
                  <div className="meta price">${price}</div>
                  <div className="meta">{category}</div>
                </div>
              </CardContent>
              </div>
            </CardActionArea>
          </Card>
      </Grid>
    );
  });
  return (
    <div className="p-5">
      <Grid container spacing={3}>
        {reduserList}
      </Grid>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      
      >
      
        {options.map((option,i) => (
          <MenuItem key={option}  onClick={()=>handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <CreateProduct modal={modal} setModal={setModal} edit={true} data={data} />
    </div>
  );
};

export default ProductComponect;
