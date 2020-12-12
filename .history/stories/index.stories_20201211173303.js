import React from 'react';

import { index } from './index';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Index',
  component: index,
};

const Template = (args) => <index {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const hello = Template.bind({});
hello.args = {
    ...HeaderStories.Hello.args,
};