import React from 'react';
import { Avatar, ButtonBase, Hidden, makeStyles, Button, Typography,Grid } from '@material-ui/core';
import { IconMenu2, IconPlus, IconCurrencyDollar,IconBrandTelegram } from '@tabler/icons';

import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import Customization from './Customization';
import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    headerAvtar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        transition: 'all .2s ease-in-out',
        background: theme.palette.primary.light,
        color: theme.palette.purple.dark,
        '&:hover': {
            background: theme.palette.purple.main,
            color: theme.palette.purple.light
        }
    },
    boxContainer: {
        width: '228px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto'
        }
    },
    button: {
        fontSize: 12, // Réduire la taille de la police
        backgroundColor: '#FACC15', // Jaune
        color: '#000', // Noir
        '&:hover': {
            backgroundColor: '#EAB308',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.5, 1), // Réduire le padding
        height: 30, // Réduire la hauteur
        minWidth: 120, // Réduire la largeur minimale
        borderRadius: 10,
        marginLeft: 12
    },
    buttonIcon: {
        height: 20,
        marginRight: theme.spacing(0.5), // Réduire l'espacement de l'icône
    },
    telegramIcon: {
        marginRight: theme.spacing(1), // Espacement entre l'icône et le texte
    },
}));

const Header = (props) => {
    const { handleLeftDrawerToggle } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.boxContainer}>
                <ButtonBase sx={{ borderRadius: '12px' }}>
                    <Avatar variant="rounded" className={classes.headerAvtar} onClick={handleLeftDrawerToggle}>
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
                <Hidden mdDown>
                    <LogoSection />
                    <div className={classes.grow} />
                </Hidden>
                
            </div>
            <Hidden smDown> {/* Masquer le bouton "My orders" lorsque l'écran est suffisamment petit */}
           
                <IconBrandTelegram className={classes.telegramIcon} />
                <Typography variant="h4" color={'#EAB308'}>We're on Telegram</Typography>
            
            </Hidden>
            <div className={classes.grow} />
            <div className={classes.grow} />
            
            <Hidden smDown>
                <Customization />
            </Hidden>
           


            <Typography variant="h4">$ 0</Typography>
            <Button
                variant="contained"
                className={classes.button}
            >
                <IconCurrencyDollar className={classes.buttonIcon} />
                Add Funds
            </Button>
            <Hidden smDown> {/* Masquer le bouton "My orders" lorsque l'écran est suffisamment petit */}
                <Button
                    variant="contained"
                    className={classes.button}
                >
                    <IconPlus className={classes.buttonIcon} />
                    My orders
                </Button>
            </Hidden>
            <NotificationSection />
            <ProfileSection />
            <Hidden smUp>
                <MobileSection />
            </Hidden>
        </React.Fragment>
    );
};

export default Header;