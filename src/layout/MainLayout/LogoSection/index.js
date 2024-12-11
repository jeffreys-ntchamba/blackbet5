import React from 'react';
import {Link} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

import config from './../../../config';
import { Card, Grid, Button, TextField, Typography, Divider, makeStyles, InputAdornment, IconButton,Select, MenuItem  } from '@material-ui/core';

const  LogoSection = () => {

    return (
        <React.Fragment>
            <Link component={RouterLink} to={config.defaultPath}>
            <Grid container direction="row"  justifyContent={'center'} marginRight={'18px'}>
          <Grid item>
            <Typography variant="h1" >
              Black
            </Typography>
          </Grid>
          <Grid item>
            <Typography color={'#EAB308'} variant="h1">Bet</Typography>
          </Grid>
        </Grid>
            </Link>
        </React.Fragment>
    );
};

export default LogoSection;
