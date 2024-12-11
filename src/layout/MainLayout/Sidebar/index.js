import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Drawer, Hidden, makeStyles, useMediaQuery, useTheme,Typography} from '@material-ui/core';
import {IconBrandTelegram } from '@tabler/icons';
import MenuList from './MenuList';

import LogoSection from '../LogoSection';

import {drawerWidth} from './../../../store/constant';
import UpgradePlanCard from '../../../ui-component/cards/UpgradePlanCard';

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    drawerPaper: {
        width: drawerWidth,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRight: 'none',
        [theme.breakpoints.up('md')]: {
            top: '88px'
        }
    },
    ScrollHeight: {
        height: 'calc(100vh - 88px)',
        paddingLeft: '16px',
        paddingRight: '16px',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 56px)'
        }
    },
    boxContainer: {
        display: 'flex',
        padding: '16px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

const Sidebar = (props) => {
    const {drawerOpen, drawerToggle, window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <React.Fragment>
            <Hidden mdUp>
                <div className={classes.boxContainer}>
                    <LogoSection />
                </div>
            </Hidden>
            <PerfectScrollbar className={classes.ScrollHeight}>
                <MenuList />
               
                <Hidden mdUp> 
                <IconBrandTelegram className={classes.telegramIcon} />
                <Typography variant="h4" color={'#EAB308'}>We're on Telegram</Typography>
            </Hidden>
            </PerfectScrollbar>
           
        </React.Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                classes={{
                    paper: classes.drawerPaper
                }}
                ModalProps={{keepMounted: true}}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </nav>
    );
};

export default Sidebar;
