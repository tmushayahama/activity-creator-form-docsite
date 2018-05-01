export class AcademyFakeDb {
    public static courses = [
        {
            'id': '1',
            'title': 'Creating Basic Activity',
            'slug': 'creating-basic-activity',
            'category': 'basic',
            'length': 10,
            'updated': 'April 26, 2018'
        }
    ];

    public static categories = [
        {
            'id': 1,
            'value': 'basic',
            'label': 'basic'
        }
    ];

    private static steps1 = [
        {
            'id': 1,
            'title': 'Introduction',
        }, {
            'id': 2,
            'title': 'Create Model Metadata'
        }, {
            'id': 3,
            'title': 'Enter Gene Product'
        }, {
            'id': 4,
            'title': 'Enter the molecular function, evidence, and reference'
        }, {
            'id': 5,
            'title': 'Add the new activity to a model'
        }, {
            'id': 6,
            'title': 'All Done'
        }

    ];

    private static images = {
        'acf-1': {
            label: 'Model',
            url: 'assets/images/tutorials/basic/acf-1.png'
        },
        'fd-1': {
            label: 'Model',
            url: 'assets/images/tutorials/basic/fd-1.png'
        },
        'gp-1': {
            label: 'Model',
            url: 'assets/images/tutorials/basic/gp-1.png'
        },
        'gpad-1': {
            label: 'Model',
            url: 'assets/images/tutorials/basic/gpad-1.png'
        },
        'gp-2': {
            label: 'Model',
            url: 'assets/images/tutorials/basic/gp-2.png'
        },
        'graph-1': {
            label: 'Model',
            url: 'assets/images/tutorials/basic/graph-1.png'
        },
        'model-def-1': {
            label: 'Model',
            url: 'assets/images/tutorials/basic/model-def-1.png'
        },
    };

    private static demoSteps = [
        {
            'title': 'Introduction',
            'content': ''
        },
    ];

    public static course = [
        {
            'id': '1',
            'title': 'Creating Basic Activity',
            'slug': 'creating-basic-activity',
            'description': 'To get you started, let’s a add a simple activity.',
            'category': 'basic',
            'length': 10,
            'totalSteps': 11,
            'updated': 'April 26, 2018',
            'steps': AcademyFakeDb.steps1,
            'images': AcademyFakeDb.images
        },

    ];

}
