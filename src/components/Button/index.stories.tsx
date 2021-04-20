import { Story, Meta } from '@storybook/react';

import Button, { ButtonPropTypes } from './';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonPropTypes> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};

export const Macro = Template.bind({});
Macro.args = {
  size: 'macro',
  children: 'Button',
};

export const Micro = Template.bind({});
Micro.args = {
  size: 'micro',
  children: 'Button',
};
