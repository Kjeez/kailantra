export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4CAF50',
                secondary: '#ffffff',
                accent: '#FF9966',
                'bg-dark': '#0a0a0a',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                kenBurns: 'kenBurns 25s ease-in-out infinite alternate',
                fadeInDown: 'fadeInDown 0.8s ease-out',
                fadeInUp: 'fadeInUp 1s ease-out both',
                fadeIn: 'fadeIn 1.5s ease-out both',
                scrollDown: 'scrollDown 2s ease-in-out infinite',
            },
            keyframes: {
                kenBurns: {
                    '0%': { transform: 'scale(1) translateX(0)' },
                    '100%': { transform: 'scale(1.15) translateX(-2%)' },
                },
                fadeInDown: {
                    'from': { opacity: '0', transform: 'translateY(-20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(30px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                scrollDown: {
                    '0%, 100%': { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
                    '50%': { transform: 'translateX(-50%) translateY(12px)', opacity: '0.3' },
                },
            },
        },
    },
    plugins: [],
}
