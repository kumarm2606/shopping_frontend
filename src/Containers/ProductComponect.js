import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const ProductComponect = () => {
  const navigate =useNavigate()
  const product = useSelector((state) => state.allProducts.products);
  const reduserList = product.map((data) => {
    const { id, title, image, category, description, price } = data;
    return (
      <Grid item xs={4} key={id} onClick={()=>navigate(`/productDetil/${id}`)}>
          <Card sx={{ maxWidth: 250, maxHeight: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="80%"
                image={image}
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
            </CardActionArea>
          </Card>
      </Grid>
    );
  });
  console.log(product);
  return (
    <div className="p-5">
      <Grid container spacing={3}>
        {reduserList}
      </Grid>
    </div>
  );
};

export default ProductComponect;
