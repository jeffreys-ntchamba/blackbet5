import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom:10,
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      
        maxWidth: 700,
        margin: 'auto',
    },
    title: {
        fontSize: '1.6rem',
        fontWeight: 700,
        color: '#333',
        lineHeight: 1.6,
        marginBottom: theme.spacing(4),
    },
    bodyText: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: 1.6,
        marginBottom: theme.spacing(1.5),
    },
    domainList: {
        fontSize: '1.6rem',
        fontWeight: 600,
        color: '#000',
        lineHeight: 1.8,
        margin: `${theme.spacing(1)}px 0`,
    },
    torTitle: {
        marginTop: theme.spacing(4),
        fontSize: '1.6rem',
        fontWeight: 600,
        color: '#000',
        
    },
    breakText: {
        wordBreak: 'break-word', // Le texte sera coupé pour rester dans les limites du conteneur
       
    },
}));

const DomainCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>
                    We use ONLY these domains! <br />
                    Be careful and double-check it! <br />
                    We are not responsible for your<br />
                    purchases purchased outside of the<br />
                    marketplace!
                </Typography>
               
                <Typography className={classes.domainList}>
                    BLACKBET.CC <br />
                    BLACKBET.ME <br />
                    BLACKBET.TOP <br />
                    BLACKBET.PW
                </Typography>
                <Typography className={classes.torTitle} variant="body1">
                    Tor domain:<br />
                    <span className={classes.breakText}>
                        cqngd74mtjd5snnwq5uqd3qeok3hz3<br />
                        6yrt2iu5mpzgxcqhbpbfpxyjid.onion
                    </span>
                </Typography>

            </CardContent>
        </Card>
    );
};

export default DomainCard;
