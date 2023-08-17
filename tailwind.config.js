/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {

            borderRadius: {
                'blr': '54px',
            },

            Bottom: {
                'bt': '160px',
            },

            margin: {
                'tn': '-30px',
            },

            backgroundImage: {
                'about': "url('assets/images/About us bg.png')",
                'Color': '#fefefe',
                'clr': '#ebecec',
                'feature-bg': "url('assets/images/Blue Bird/our-facility.png')"
            },

            colors: {
                'clr': '#ebecec',
            },

            margin: {
                'tt': '-29px'
            },

            width: {
                'wn': '-86%',
                'fw': '30.33333%'
            },

            boxShadow: {
                'box': '0px 0px 22px 0px #cbcbcb',
            },

            height: {
                '73': '250px',
            },

            minHeight: {
                '490': '490px',
            },
            textColor: {
                'ftc': '#6e953b',
                'ftxt': '#3e4095'
            },

            fontFamily: {
                'calib': "url('assets/custom-fonts/candy-beans.otf')",
            }

        },
    },
    plugins: [
        require('@fortawesome/fontawesome-free'),
        require('@tailwindcss/forms'),
    ],
}