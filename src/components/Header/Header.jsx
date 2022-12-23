import React, {useState} from 'react';
import { AppBar, Toolbar, Typography,List,ListItem, ListItemText, Drawer} from '@material-ui/core';

import useStyles from './styles';


const Header = () => {
    const classes= useStyles();
    return ( 
    <AppBar position="static " >
        <Toolbar className= {classes.toolbar}>
            <Typography variant="h5" className = {classes.title}>
                Sorting Algorithms using React and DSA
            </Typography>
        </Toolbar>
    </AppBar>
    
    );
}
export default Header;