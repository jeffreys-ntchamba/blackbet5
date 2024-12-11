import React from 'react';
import {Box, Typography} from '@material-ui/core';

import NavGroup from './NavGroup';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import menuItem from './../../../../menu-items/main-menu-items';

const MenuList = () => {
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            case 'item':
                return <NavItem key={item.id} item={item} />;
            case 'collapse':
                return <NavCollapse key={item.id} item={item} />;
            default:
                console.error(`Invalid menu item type: ${item.type}`);
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <Box sx={{ marginLeft: '-18px' }}> {/* Décale vers la gauche */}
            {navItems}
        </Box>
    );
};

export default MenuList;
