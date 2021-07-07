module.exports = {
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === 'production',
        content: ['./layouts/**/*.html'],
    },
    theme: {
        fontFamily: {
            'display': ['Work Sans', 'sans-serif'],
            'body': ['Open Sans', 'sans-serif'],
        },
        fontSize: {
            xs: '13px',
            base: '1rem',
            sm: '17px',
            regular: '21px',
            lg: '24px',
        },
        textColor: theme => ({
            ...theme('colors'),
            'light': '#FFF7E3',
            'heading': '#0E3D45',
            'body': '#0E373E',
            'icon': '#0E4158',
            'accent': '#A6406C',
            'accent-light': '#BAC8D8',
            'footer': '#2B8DA5',
        }),
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#0e4158',
            'primary-dark': '#0d3345',
            'secondary': '#7d3654',
            'secondary-light': '#2B8DA5',
            'secondary-dark': '#0C4E33',
            'off-white': '#f4f9ff',
            'light': '#FFF7E3',
            'md': '#dbe8eb',
            'page-header': '#9f3d68',
        }),
        backgroundImage: _theme => ({
            'hunter-green': 'linear-gradient(#47BC8C, #15774F)',
            'indian-red': 'linear-gradient(#D95151, #8B3B3B)',
            'mellow-yellow': 'linear-gradient(#FFD27E, #C49232)',
            'sky-blue': 'linear-gradient(#86C8E0, #2B8DA5)',
            'plum-red': 'linear-gradient(#803756, #5C2B40)',
            'prussian-blue': 'linear-gradient(#0E4158, #0D3243)',
        }),
        gradientColorStops: theme => ({
            ...theme('colors'),
            'primary': '#0e4158',
            'primary-dark': '#0d3345',
        }),
        extend: {
            colors: {
                'ice-blue': '#F4F9FF',
                'pistachio-green': '#DBE8EB',
                'buttermilk-yellow': '#FDF7EB',
                'sky-blue': '#86C8E0',
                'cerulean-blue': '#2B8DA5',
                'peach-yellow': '#F2E0B7',
                'sand-yellow': '#F0EAD9',
                'pale-yellow': '#FCEDCB',
                'hunter-green': '#47BC8C',
                'forest-green': '#086243',
                'powder-blue': '#BAC8D8',
                'mellow-yellow': '#FFD27E',
                'prussian-blue': '#0E4158',
                'pigeon-blue': '#4A6D82',
                'denim-blue': '#0D3243',
                'magenta-red': '#A6406C',
                'plum-red': '#803756',
                'indian-red': '#D95151',
                'pink-red': '#D94E8A',
                'cream-red': '#F0E6E6',
                'merlot-red': '#8B3B3B',
                'dijon-yellow': '#C49232',
            },
            spacing: {
                '160': '40rem',
            },
            maxWidth: {
                '1/2': '50%',
            },
            height: {
                '5/4': '125%',
                '3/2': '150%',
                '2/1': '200%',
            },
            borderWidth: {
                '3': '3px'
            },
            borderColor: {
                'button': '#A6406C',
                'button-light': '#FFF7E3',
                'accent-dark': '#7a3814',
            },
            translate: {
                '128': '32rem',
                '-128': '-32rem',
            },
            rotate: {
                '-60': '-60deg'
            }
        }
    }
}
