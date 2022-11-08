import baseTheme from './base';

const LIGHT_THEME_KEY = 'light';

const lightTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary:
      'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(31,208,80,0.5508797268907564) 0%, rgba(208,31,31,1) 62%)',
    backgroundSecondary: '#dedede',
    borderPrimary: '#000000',
    textPrimary: '#333333',
    successBackgroundPrimary: '#00bc8b',
    warningBackgroundPrimary: '#ffc200',
    warningTextPrimary: '#333333',
    dangerBackgroundPrimary: '#ed2e2e',
    dangerTextPrimary: '#ffffff',
    dangerBackgroundSecondary: '#ea3d3d',
  },
};

export { lightTheme, LIGHT_THEME_KEY };
