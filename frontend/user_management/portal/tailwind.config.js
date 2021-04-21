module.exports = {
  future: {
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms'),
  ],
  purge:[],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: 'rgb(183, 21, 64)',
      secondary: '#000',
      white: '#FFF',
      'primary-005': 'rgba(183, 21, 64, 0.25)',
    },
    backgroundColor: () => ({
      primary: 'rgb(183, 21, 64)',
      secondary: '#000',
      white: '#FFF',
      'primary-005': 'rgba(183, 21, 64, 0.25)',
    }),
    fontFamily: {
      primary: `Comfortaa, cursive`
    }
  }
};