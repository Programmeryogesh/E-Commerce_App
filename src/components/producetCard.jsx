import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from '../store/actions/productActions';
import { CardMedia } from '@mui/material';


export default function ProductCard({ Product }) {
  const dispatch = useDispatch()
  const productInCart = useSelector((state) => state.cart.products);
  // console.log(productInCart);
  function isItemInCart() {
    return productInCart.some((oneObj) => oneObj.id == Product.id)
  }
  return (
    <Card color="primary" variant="outlined" sx={{ width: 290 , margin:" 5px 4px", overflow: "hidden" }}>
      <div>
        <Typography level="title-lg">{Product.title}</Typography>
        <Typography level="body-sm">{Product.category}</Typography>
      </div>
      
          <CardMedia
        sx={{ height: 140 , backgroundSize:"contain" }}
        image={Product.image}
        title={Product.title}
      />
    
      <Typography
        fontSize="lg">{Product.description.split(" ").slice(0, 10).join(' ')}</Typography>
      <CardContent orientation="horizontal" sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${Product.price}
          </Typography>
        </div>
        {isItemInCart() ? (
          <Button
            onClick={() => dispatch(setProducts(Product))}
            variant="outlined"
            disabled
            size="md"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          >
            Already Added
          </Button>
        ) : (
          <Button
            onClick={() => dispatch(setProducts(Product))}
            variant="outlined"
            size="md"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          >
            Add To Cart
          </Button>
        )}
        <Link to={`/product/${Product.id}`} >
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          >
            Explore
          </Button>
        </Link>

      </CardContent>
    </Card>
  );
}