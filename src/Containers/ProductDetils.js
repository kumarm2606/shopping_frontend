import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import { ButtonBase, Grid, Paper, Typography } from "@mui/material";

const ProductDetils = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const fetchProductDetail = async (id) => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(selectedProducts(res.data));
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
        height: "350px",
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
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <img className="singalImage" alt="complex" src={image} />
            </ButtonBase>
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
