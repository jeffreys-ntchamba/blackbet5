import React from 'react';
import {Grid} from '@material-ui/core';

import {gridSpacing} from '../../store/constant';
import NotificationCard from '../../ui-component/cards/NotificationCard';
import BalanceCard from '../../ui-component/cards/BalanceCard';
import TotalIncomePatternCard from '../../ui-component/cards/TotalIncomePatternCard';
import DomainCard from '../../ui-component/cards/DomainCard';
import ChartCard from '../../ui-component/cards/ChartCard';
import PopularCard from '../../ui-component/cards/PopularCard';
import Login from '../../views/pages/authentication/authentication3/Login3';
import { IconCurrencyDollar } from '@tabler/icons';
const Dashboard = () => {
    const cards = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        title: `Chase CC Balance ${index + 1}`,
        subtitle: 'Banks | VCC',
        pcs: `+1 pcs, miami_cash_team`,
        amount: `${'24/11/2024 22:35' + index * 100}`, 
    }));
    return (
        <Grid container spacing={gridSpacing} >
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                    
                    <DomainCard />
                     <NotificationCard />
                     <NotificationCard />
                    </Grid>

                    
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                    {cards.map((card) => (
                <BalanceCard
                    key={card.id} // Utilisation d'une clé unique pour chaque élément
                    title={card.title}
                    subtitle={card.subtitle}
                    pcs={card.pcs}
                    amount={card.amount}
                />
            ))}
                        
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12} md={8}>
                        <ChartCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PopularCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
