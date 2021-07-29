import React from 'react';
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
  const allProducts = JSON.parse(localStorage.getItem("rowdata") || '{}');
  console.log(allProducts);
    return (
      <div id="customer">
        <Navbar/>
        <div id="products">
          {allProducts.map((product: any) => {
              return <Card className={classes.root}>
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
                          ${product.price}
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                      <CardActions>
                        <Button
                        size="small"
                        color="secondary">
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