import React from 'react';
import { Card, CardContent, Grid, Avatar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: theme.spacing(2),
        maxWidth: 700,
        margin: 'auto',
        marginBottom:10
    },
    title: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#333',
    },
    timestamp: {
        fontSize: '0.85rem',
        color: '#888',
        marginTop: theme.spacing(0.5),
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: '#000',
    },
    icon: {
        width: 30,
        height: 30,
        color: '#fff',
    },
}));

const NotificationCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Avatar className={classes.iconContainer}>
                            <Typography className={classes.icon}>BB</Typography>
                        </Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.title}>New section:</Typography>
                        <Typography className={classes.title}>Web Admins (WordPress)</Typography>
                        <Typography className={classes.timestamp}>12-05-2023 01:01:59</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default NotificationCard;
