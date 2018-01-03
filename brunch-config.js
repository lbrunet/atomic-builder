exports.config = {
    paths: {
        'public': 'dist',
        'watched': ['src']
    },
    files: {
        stylesheets: {
            joinTo: {'css/main.css': /^src/}
        }
    },
    conventions: {
        ignored: [
            /\/_/
        ],
        assets: /^src\/assets/,
        vendor: /(^bower_components|node_modules|vendor\/bower)[\\/]/
    },
    plugins: {
        sass: {
            mode: 'native',
            allowCache: true
        },
        postcss: {
            processors: [
                require('autoprefixer')([
                    'Explorer >= 11',
                    'Firefox >= 40',
                    'Chrome >= 45',
                    'Safari >= 8',
                    'Opera >= 9.5',
                    // TODO Mobile device support
                ]),
                require('csswring')()
            ]
        },
        // cssnano: {
        //     autoprefixer: {
        //         add: true
        //     }
        // },
        csscomb: {
            encoding: 'zen'
        }
    }
};
