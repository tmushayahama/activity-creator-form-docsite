export const navigation = [
    {
        'id': 'introduction',
        'title': 'Introduction',
        'translate': 'NAV.CALENDAR',
        'type': 'item',
        'icon': 'today',
        'url': '/apps/calendar'
    }, {
        'id': 'glance',
        'title': 'At a Glance',
        'translate': 'NAV.APPLICATIONS',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'dashboards',
                'title': 'Dashboards',
                'translate': 'NAV.DASHBOARDS',
                'type': 'collapse',
                'icon': 'dashboard',
                'children': [
                    {
                        'id': 'analytics',
                        'title': 'Analytics',
                        'type': 'item',
                        'url': '/apps/dashboards/analytics'
                    },
                    {
                        'id': 'project',
                        'title': 'Project',
                        'type': 'item',
                        'url': '/apps/dashboards/project'
                    }
                ]
            },
            {
                'id': 'calendar',
                'title': 'Calendar',
                'translate': 'NAV.CALENDAR',
                'type': 'item',
                'icon': 'today',
                'url': '/apps/calendar'
            },
            {
                'id': 'e-commerce',
                'title': 'E-Commerce',
                'translate': 'NAV.ECOMMERCE',
                'type': 'collapse',
                'icon': 'shopping_cart',
                'children': [
                    {
                        'id': 'dashboard',
                        'title': 'Dashboard',
                        'type': 'item',
                        'url': '/apps/e-commerce/dashboard'
                    },
                    {
                        'id': 'products',
                        'title': 'Products',
                        'type': 'item',
                        'url': '/apps/e-commerce/products',
                        'exactMatch': true
                    },
                    {
                        'id': 'productDetail',
                        'title': 'Product Detail',
                        'type': 'item',
                        'url': '/apps/e-commerce/products/1/printed-dress',
                        'exactMatch': true
                    },
                    {
                        'id': 'orders',
                        'title': 'Orders',
                        'type': 'item',
                        'url': '/apps/e-commerce/orders',
                        'exactMatch': true
                    },
                    {
                        'id': 'orderDetail',
                        'title': 'Order Detail',
                        'type': 'item',
                        'url': '/apps/e-commerce/orders/1',
                        'exactMatch': true
                    }
                ]
            },
            {
                'id': 'academy',
                'title': 'Academy',
                'translate': 'NAV.ACADEMY',
                'type': 'item',
                'icon': 'school',
                'url': '/apps/academy'
            },
            {
                'id': 'mail',
                'title': 'Mail',
                'translate': 'NAV.MAIL.TITLE',
                'type': 'item',
                'icon': 'email',
                'url': '/apps/mail',
                'badge': {
                    'title': 25,
                    'translate': 'NAV.MAIL.BADGE',
                    'bg': '#F44336',
                    'fg': '#FFFFFF'
                }
            },
            {
                'id': 'mail-ngrx',
                'title': 'Mail Ngrx',
                'translate': 'NAV.MAIL_NGRX.TITLE',
                'type': 'item',
                'icon': 'email',
                'url': '/apps/mail-ngrx',
                'badge': {
                    'title': 13,
                    'translate': 'NAV.MAIL_NGRX.BADGE',
                    'bg': '#EC0C8E',
                    'fg': '#FFFFFF'
                }
            },
            {
                'id': 'chat',
                'title': 'Chat',
                'translate': 'NAV.CHAT',
                'type': 'item',
                'icon': 'chat',
                'url': '/apps/chat',
                'badge': {
                    'title': 13,
                    'bg': '#09d261',
                    'fg': '#FFFFFF'
                }
            },
            {
                'id': 'file-manager',
                'title': 'File Manager',
                'translate': 'NAV.FILE_MANAGER',
                'type': 'item',
                'icon': 'folder',
                'url': '/apps/file-manager'
            },
            {
                'id': 'contacts',
                'title': 'Contacts',
                'translate': 'NAV.CONTACTS',
                'type': 'item',
                'icon': 'account_box',
                'url': '/apps/contacts'
            },
            {
                'id': 'to-do',
                'title': 'To-Do',
                'translate': 'NAV.TODO',
                'type': 'item',
                'icon': 'check_box',
                'url': '/apps/todo',
                'badge': {
                    'title': 3,
                    'bg': '#FF6F00',
                    'fg': '#FFFFFF'
                }
            },
            {
                'id': 'scrumboard',
                'title': 'Scrumboard',
                'translate': 'NAV.SCRUMBOARD',
                'type': 'item',
                'icon': 'assessment',
                'url': '/apps/scrumboard'
            }
        ]



    },

];
