/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'softRed': 'hsl(7, 99%, 70%)',
                'yellow': 'hsl(51, 100%, 49%)',
                'darkDesatCyan': 'hsl(167, 40%, 24%)',
                'darkBlue': 'hsl(198, 62%, 26%)',
                'darkModCyan': 'hsl(168, 34%, 41%)',
                'darkDesatBlue': 'hsl(212, 27%, 19%)',
                'darkerGrayishBlue': 'hsl(213, 9%, 39%)',
                'darkGrayishBlue': 'hsl(232, 10%, 55%)',
                'grayishBlue': 'hsl(210, 4%, 67%)',
                'footerBg': 'hsl(167, 44%, 70%)',
                'white': 'hsl(0, 0%, 100%)',
            },
            fontFamily: {
                'barlowFont': ['Barlow', 'sans-serif'],
                'frauncesFont': ['Fraunces', 'serif'],
            },
            backgroundImage: {
                'headerBgImg-mobile': 'url("/images/mobile/image-header.jpg")',
                'headerBgImg-desktop': 'url("/images/desktop/image-header.jpg")',
                'graphicDesign-mobile': 'url("/images/mobile/image-graphic-design.jpg")',
                'graphicDesign-desktop': 'url("/images/desktop/image-graphic-design.jpg")',
                'photography-mobile': 'url("/images/mobile/image-photography.jpg")',
                'photography-desktop': 'url("/images/desktop/image-photography.jpg")',
            },
            animation: {
                'fadeInFromLeft': 'fadeInFromLeft 1.5s ease-in-out forward',
            },
            keyframes: {
                'fadeInFromLeft': {
                    '0%': { 'opacity': 0 },
                    '100%': { 'opacity': 1 },
                }
            }
        },
    },
    plugins: [],
}
