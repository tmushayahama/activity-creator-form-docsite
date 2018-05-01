export const navigation = [
    {
        'id': 'welcome',
        'title': 'Welcome',
        'type': 'item',
        'icon': 'today',
        'url': '/welcome'
    }, {
        'id': 'at-a-glance',
        'title': 'At a Glance',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'getting-started',
                'title': 'Getting Started',
                'type': 'item',
                'icon': 'today',
                'url': '/getting-started',
            }, {
                'id': 'faq',
                'title': 'FAQs',
                'type': 'item',
                'icon': 'info',
                'url': '/faq',
            }
        ]
    }, {
        'id': 'tutorials',
        'title': 'Tutorials',
        'type': 'group',
        'icon': 'apps',
        'badge': {
            'title': 25,
            'bg': '#F44336',
            'fg': '#FFFFFF'
        },
        'children': [
            {
                'id': 'tut-0',
                'title': 'Tutorials Overview',
                'type': 'item',
                'icon': 'today',
                'url': '/tutorials',

            }, {
                'id': 'tut-1',
                'title': 'The Basics',
                'type': 'item',
                'icon': 'today',
                'url': '/course'

            }
        ]
    },
];
