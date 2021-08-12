import React, { useState,useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Customer.Styles';
import '../customer/customer.css';
import Navbar from '../../navbar/Navbar';



function Customer() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([] as any);
  const [count,setCount]=useState(JSON.parse(localStorage.getItem("cartItems") || '{}').length);
  const [products,setProducts]=useState([] as any);

  useEffect(()=>{
    const newItems = JSON.parse(localStorage.getItem("newItems") || '{}');
    const approvedItems=newItems.filter((items:any)=>items.status==="APPROVED");
    if(approvedItems){
        setProducts(approvedItems);
      }
  },[])
  
const addToCart = (product: any) => {
    const result = products.find((item: any) => item.id === product.id)
    cartItems.push(result);
    setCartItems([...cartItems])
    console.log(cartItems,"cartItems");
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    setCount(cartItems.length);
  }

  return (
    <div id="customer">
      <Navbar count={count}/>
      <div id="products">
        {products.map((product: any) => {
          return <Card className={classes.root} key={product.id}>
            <CardActionArea>

              <CardMedia
                className={classes.media}
                image={product.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2">
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h4">
                  Rs-{product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={() => addToCart(product)}>
                Add to Cart
                        </Button>
            </CardActions>
          </Card>
        })}
      </div>
    </div>
  );
}
export default Customer;