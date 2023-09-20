import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import {  Grid, Paper, Typography } from "@mui/material";

const ProductDetils = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const fetchProductDetail = async (id) => {
    const res = await axios
      .get(`http://localhost:4000/api/postlist?id=${id}`)
      .catch((error) => {
        console.log("Error", error);
      });
      console.log(res,"---------------------->")
    dispatch(selectedProducts(res.data.data[0]));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "100%",
        height: "544px",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Grid container xs={12} spacing={2}>
          <Grid item xs={6}>
              <img className="singalImage" alt="complex" src="https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928_1280.jpg" />
           
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${price}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {description}
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid item>
          <Typography variant="subtitle1" component="div">
            $19.00
          </Typography>
        </Grid> */}
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default ProductDetils;
