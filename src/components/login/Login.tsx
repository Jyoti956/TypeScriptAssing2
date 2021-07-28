import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './loginStyles';
import Form2 from '../form/Form2';

export default function Login() {
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
            <Form2/>
        </div>
    );
}

