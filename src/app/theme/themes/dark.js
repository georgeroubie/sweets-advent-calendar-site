import baseTheme from './base';

const DARK_THEME_KEY = 'dark';

const darkTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary:
      'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(31,208,80,0.5508797268907564) 0%, rgba(208,31,31,1) 62%)',
    backgroundSecondary: '#171717',
    borderPrimary: '#000000',
    textPrimary: '#dfdfdf',
    successBackgroundPrimary: '#00bc8b',
    warningBackgroundPrimary: '#ffc200',
    warningTextPrimary: '#000000',
    dangerBackgroundPrimary: '#ff606A',
    dangerTextPrimary: '#dfdfdf',
    dangerBackgroundSecondary: '#fa747c',
  },
};

export { darkTheme, DARK_THEME_KEY };
