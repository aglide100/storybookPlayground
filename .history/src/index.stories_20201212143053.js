import React from 'react';

import { index } from './index';

export default {
  title: 'Example/Index',
  component: index,
};

const Template = (args) => <index {...args} />;

export const hello = Template.bind({});
hello.args = {
    ...HeaderStories.Hello.args,
};