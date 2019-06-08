export class FuseNavigation
{
    public verticalNavItems: any[];
    public horizontalNavItems: any[];

    constructor()
    {
        this.verticalNavItems = [
            {
                'title': 'Conan',
                'type' : 'subheader'
            },
            {
                'title': 'Table of Contents',
                'type' : 'nav-item',
                'icon' : 'book',
                'url'  : '/sample',
                'badge': {
                    'title': 'TOC',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            }
        ];

        this.horizontalNavItems = [
            {
                'title'   : 'Apps',
                'icon'    : 'apps',
                'type'    : 'nav-collapse',
                'children': [
                    {
                        'title': 'Table of Contents',
                        'type' : 'nav-item',
                        'icon' : 'email',
                        'url'  : '/sample',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'title': 'Supreme',
                        'type' : 'nav-item',
                        'icon' : 'email',
                        'url'  : '/supreme',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                ]
            }
        ];
    }
}
