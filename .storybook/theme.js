import { create } from '@storybook/theming/create';

const TEXT_COLOR = 'rgba(160, 160, 160, 0.95)';
const PRIMARY_COLOR = '#00AEFF'; // or 0066FF

export const ElementsTheme = create({
  base: 'light',

  colorPrimary: TEXT_COLOR, //'#000000',
  colorSecondary: PRIMARY_COLOR, // Active color

  // UI
  appBg: '#1b2235',
  appContentBg: '#fff',
  appBorderColor: '#CBD7DC',
  appBorderRadius: 4,

  // Typography
  fontBase: "'72', Arial, Helvetica, sans-serif",
  fontCode: 'monospace',

  // Text colors
  textColor: TEXT_COLOR,
  textInverseColor: '#00ff00',

  // Toolbar default and active colors
  // barTextColor: '#E6ECEF',
  // barSelectedColor: '#ffffff',
  // barBg: '#506B77',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: TEXT_COLOR,
  inputBorderRadius: 4,

  /**
   * name to display in the top left corner
   * @type {String}
   */
  brandTitle: 'Webapp Suite Elements for React',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  brandUrl: '',
  brandImage: '/storybook/images/logo.png'
});
