import React from 'react';
import { Card, Grid, Typography, Avatar, makeStyles } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom:10,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        padding: theme.spacing(1.5),
        maxWidth: 700,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            height: 'auto',
            padding: theme.spacing(2),
        },
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: '8px',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing(2),
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
    },
    title: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#333',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
        },
    },
    amount: {
        fontSize: '0.5rem',
        color: '#000',
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    subtitle: {
        fontSize: '0.85rem',
        color: '#6c757d',
        marginLeft: theme.spacing(1),
    },
    pcs: {
        fontSize: '0.85rem',
        fontWeight: 600,
        color: '#28a745',
    },
}));

const BalanceCard = ({ icon, title, subtitle, amount, pcs }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.iconContainer}>
                <Avatar style={{ backgroundColor: 'transparent' }}>
                    {icon || <CreditCardIcon />}
                </Avatar>
            </div>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
                <Typography className={classes.subtitle}>
                    | {subtitle} <span className={classes.pcs}>{pcs}</span>
                </Typography>
            </div>
            <Typography className={classes.amount}>{amount}</Typography>
        </Card>
    );
};

export default BalanceCard;
