import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Navbar.Styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';

function Navbar(props:any){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography 
                    variant="h6" 
                    className={classes.title}>
                    WebCart
                    </Typography>
                    <Link to="/usercartlist">
                        <ShoppingCartIcon style={{color:"red"}}/>
                    </Link><span>{props.count}</span>
                </Toolbar>
            </AppBar>
        </div>
    )
};
export default Navbar;