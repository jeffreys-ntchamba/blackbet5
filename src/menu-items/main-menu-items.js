import React from 'react';
import {FormattedMessage} from 'react-intl';

import {
    IconAtom,
    IconBasket,
    IconBellRinging,
    IconBorderAll,
    IconBorderRadius,
    IconBoxMultiple,
    IconBrandChrome,
    IconBrandGravatar,
    IconBrush,
    IconBug,
    IconCalendar,
    IconChartArcs,
    IconChartCandle,
    IconChartInfographic,
    IconCircle,
    IconCircleOff,
    IconClipboardList,
    IconDashboard,
    IconDeviceAnalytics,
    IconFiles,
    IconForms,
    IconHelp,
    IconId,
    IconKey,
    IconLayoutList,
    IconLoader,
    IconLockAccess,
    IconMail,
    IconMenu,
    IconMessages,
    IconNfc,
    IconPalette,
    IconPencil,
    IconPhoneCall,
    IconPictureInPicture,
    IconReceipt2,
    IconRun,
    IconShadow,
    IconShape,
    IconShieldLock,
    IconSitemap,
    IconTools,
    IconTypography,
    IconUser,
    IconUserCheck
} from '@tabler/icons';

const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics,

    IconChartArcs: IconChartArcs,
    IconClipboardList: IconClipboardList,
    IconChartInfographic: IconChartInfographic,

    IconForms: IconForms,
    IconReceipt2: IconReceipt2,
    IconPencil: IconPencil,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconPhoneCall: IconPhoneCall,
    IconBrandChrome: IconBrandChrome,
    IconFiles: IconFiles,
    IconAtom: IconAtom,
    IconTools: IconTools,
    IconBrush: IconBrush,
    IconLockAccess: IconLockAccess,
    IconShieldLock: IconShieldLock,
    IconKey: IconKey,
    IconTypography: IconTypography,
    IconMenu: IconMenu,
    IconBoxMultiple: IconBoxMultiple,
    IconCircleOff: IconCircleOff,
    IconCircle: IconCircle,
    IconBorderRadius: IconBorderRadius,
    IconBrandGravatar: IconBrandGravatar,
    IconShape: IconShape,
    IconUserCheck: IconUserCheck,
    IconId: IconId,
    IconLayoutList: IconLayoutList,
    IconBug: IconBug,
    IconLoader: IconLoader,
    IconRun: IconRun,
    IconUser: IconUser,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap,
    IconPictureInPicture: IconPictureInPicture,
    IconMail: IconMail,
    IconMessages: IconMessages,
    IconNfc: IconNfc,
    IconCalendar: IconCalendar,
    IconBellRinging: IconBellRinging,
    IconBorderAll: IconBorderAll,
    IconChartCandle: IconChartCandle,
    IconBasket: IconBasket
};

const menuItems = {
    items: [
       
        {
            id: 'main-menu',
            type: 'group',
            children: [
                {
                    id: 'home',
                    title: <FormattedMessage id="home" defaultMessage="Home" />,
                    type: 'item',
                    url: '/dashboard/default',
                    icon: icons['IconDashboard'], // Icône pour "Home"
                    breadcrumbs: false
                },
                {
                    id: 'shops',
                            title: <FormattedMessage id="shops" defaultMessage="Shops" />,
                            type: 'item',
                            url: '/shops', // Page des magasins
                            icon: icons['IconBasket'],
                    breadcrumbs: false
                },
                {
                    id: 'banks',
                    title: <FormattedMessage id="banks" defaultMessage="Banks" />,
                    type: 'item',
                    url: '/banks', // Page des banques
                    icon: icons['IconDeviceAnalytics'],
                    breadcrumbs: false
                },
                {
                    id: 'personal-info',
                    title: <FormattedMessage id="personal-info" defaultMessage="Personal Info" />,
                    type: 'collapse',
                    icon: icons['IconUser'],
                    children: [
                        {
                            id: 'personal-details',
                            title: <FormattedMessage id="personal-details" defaultMessage="Details" />,
                            type: 'item',
                            url: '/personal-info/details' // Détails des informations personnelles
                        },
                        {
                            id: 'settings',
                            title: <FormattedMessage id="settings" defaultMessage="Settings" />,
                            type: 'item',
                            url: '/personal-info/settings' // Paramètres
                        }
                    ]
                },
                {
                    id: 'lookup-info',
                    title: <FormattedMessage id="lookup-info" defaultMessage="LookUp Info" />,
                    type: 'collapse',
                    icon: icons['IconMessages'],
                    children: [
                        {
                            id: 'search',
                            title: <FormattedMessage id="search" defaultMessage="Search" />,
                            type: 'item',
                            url: '/lookup-info/search' // Recherche d'informations
                        },
                        {
                            id: 'history',
                            title: <FormattedMessage id="history" defaultMessage="History" />,
                            type: 'item',
                            url: '/lookup-info/history' // Historique des recherches
                        }
                    ]
                },
                {
                    id: 'real-documents',
                    title: <FormattedMessage id="real-documents" defaultMessage="Real Documents" />,
                    type: 'collapse',
                    icon: icons['IconClipboardList'],
                    children: [
                        {
                            id: 'search',
                            title: <FormattedMessage id="search" defaultMessage="Search" />,
                            type: 'item',
                            url: '/lookup-info/search' // Recherche d'informations
                        },
                        {
                            id: 'history',
                            title: <FormattedMessage id="history" defaultMessage="History" />,
                            type: 'item',
                            url: '/lookup-info/history' // Historique des recherches
                        }
                    ]
                },
                {
                    id: 'paypal',
                    title: <FormattedMessage id="paypal" defaultMessage="Paypal" />,
                    type: 'item',
                    url: '/paypal', // Page PayPal
                    icon: icons['IconBrandChrome']
                },
                {
                    id: 'bases-collection',
                    title: <FormattedMessage id="bases-collection" defaultMessage="Bases Collection" />,
                    type: 'item',
                    url: '/bases-collection', // Collection de bases
                    icon: icons['IconFiles']
                },
                {
                    id: 'dedicated-server',
                    title: <FormattedMessage id="dedicated-server" defaultMessage="Dedicated Server" />,
                    type: 'item',
                    url: '/dedicated-server', // Serveur dédié
                    icon: icons['IconBasket']
                },
                {
                    id: 'self-registrations',
                    title: <FormattedMessage id="self-registrations" defaultMessage="Self Registrations" />,
                    type: 'collapse',
                    icon: icons['IconUserCheck'],
                    children: [
                        {
                            id: 'manual-registration',
                            title: <FormattedMessage id="manual-registration" defaultMessage="Manual" />,
                            type: 'item',
                            url: '/self-registrations/manual' // Enregistrements manuels
                        },
                        {
                            id: 'auto-registration',
                            title: <FormattedMessage id="auto-registration" defaultMessage="Auto" />,
                            type: 'item',
                            url: '/self-registrations/auto' // Enregistrements automatiques
                        }
                    ]
                },
                {
                    id: 'google-voice',
                    title: <FormattedMessage id="google-voice" defaultMessage="Google Voice" />,
                    type: 'item',
                    url: '/google-voice', // Page Google Voice
                    icon: icons['IconMessages']
                }
            ]
        },
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'group',
            children: [
                {
                    id: 'dash-default',
                    title: <FormattedMessage id="default" />,
                    type: 'item',
                    url: '/dashboard/default',
                    icon: icons['IconDashboard'],
                    breadcrumbs: false
                }
            ]
        },

        {
            id: 'pages',
            title: <FormattedMessage id="pages" />,
            caption: <FormattedMessage id="pages-caption" />,
            type: 'group',
            children: [
                {
                    id: 'authentication',
                    title: <FormattedMessage id="authentication" />,
                    type: 'collapse',
                    icon: icons['IconKey'],
                    children: [




                                {
                                    id: 'login3',
                                    title: <FormattedMessage id="login" />,
                                    type: 'item',
                                    url: '/pages/login/login3',
                                    target: true
                                },
                                {
                                    id: 'register3',
                                    title: <FormattedMessage id="register" />,
                                    type: 'item',
                                    url: '/pages/register/register3',
                                    target: true
                                }






                    ]
                },



            ]
        },
        {
            id: 'utilities',
            title: <FormattedMessage id="utilities" />,
            type: 'group',
            children: [
                {
                    id: 'util-typography',
                    title: <FormattedMessage id="typography" />,
                    type: 'item',
                    url: '/utils/util-typography',
                    icon: icons['IconTypography']
                },
                {
                    id: 'color',
                    title: <FormattedMessage id="color" />,
                    type: 'item',
                    url: '/utils/util-color',
                    icon: icons['IconPalette']
                },
                {
                    id: 'shadow',
                    title: <FormattedMessage id="shadow" />,
                    type: 'item',
                    url: '/utils/util-shadow',
                    icon: icons['IconShadow']
                },
                {
                    id: 'icons',
                    title: <FormattedMessage id="icons" />,
                    type: 'collapse',
                    icon: icons['IconPencil'],
                    children: [
                        {
                            id: 'util-tabler-icons',
                            title: <FormattedMessage id="tabler-icons" />,
                            type: 'item',
                            url: '/icons/tabler-icons'
                        },
                        {
                            id: 'util-material-icons',
                            title: <FormattedMessage id="material-icons" />,
                            type: 'item',
                            url: '/icons/material-icons'
                        }
                    ]
                }
            ]
        },
        {
            id: 'sample-docs-roadmap',
            type: 'group',
            children: [
                {
                    id: 'rule',
                    title: <FormattedMessage id="rule" />,
                    type: 'item',
                    url: '/sample-page',
                    icon: icons['IconBrandChrome']
                },
                {
                    id: 'documentation',
                    title: <FormattedMessage id="documentation" />,
                    type: 'item',
                    url: '#',
                    icon: icons['IconHelp'],
                    target: true,
                    external: true
                }
            ]
        }
    ]
};

export default menuItems;
