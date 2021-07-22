import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './homeStyles';

export default function Navbar() {
    const classes = useStyles();
    

return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        WebCart
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

