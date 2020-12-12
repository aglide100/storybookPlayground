import React from 'react';

import { text } from './text';

export default {
  title: 'Example/text',
  component: text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Hello',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'text',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'text',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'text',
};
