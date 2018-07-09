import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  scaleRatio: '2',
  googleFonts: [
    {
      name: 'Barlow',
      styles: [
        '400',
        '600',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Barlow', 'Arial', 'sans-serif'],
  headerColor: '#2c2c2c',
  headerWeight: 'bold',
  bodyFontFamily: ['Barlow', 'Arial', 'sans-serif'],
  bodyColor: '#2c2c2c',
  bodyWeight: '400',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    // More styles here
  }),
});

export default typography;
