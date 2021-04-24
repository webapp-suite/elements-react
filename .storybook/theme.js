import { create } from '@storybook/theming/create';

const TEXT_COLOR = '#32363A';
const PRIMARY_COLOR = '#00AEFF';

export const ElementsTheme = create({
  base: 'light',

  colorPrimary: TEXT_COLOR, //'#000000',
  colorSecondary: PRIMARY_COLOR,

  // UI
  appBg: '#edeff0',
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
  // barTextColor: '#ffffff',
  // barSelectedColor: '#ffffff',
  // barBg: '#0065A3',

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
  brandImage: 'https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/white-bg-webapps-ui-blue.png'
});
