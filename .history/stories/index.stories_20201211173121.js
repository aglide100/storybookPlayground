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

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
