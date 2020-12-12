import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Hello',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const success = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const danger = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};