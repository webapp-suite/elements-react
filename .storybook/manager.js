import { addons } from '@storybook/addons';
import { ElementsTheme } from './theme';

addons.setConfig({
  theme: ElementsTheme,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  panelPosition: 'right',
  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showPanel: true
});
