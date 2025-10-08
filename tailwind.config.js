/** Tailwind Config — myLegalAid */
module.exports = {
    content: ['./**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                brand: { 50:'#f0f7ff', 600:'#1d7dd8', 700:'#1264b0' }
            },
            container: { center: true, padding: '1rem' }
        }
    },
    plugins: []
};