import React from 'react';

import Name from './Name';

export default {
  component: Name,
  title: 'Name',
};

const Template = args => <Name {...args} />;

export const Default = Template.bind({});
Default.args = {
  Name: {
    id: '1',
    title: 'Default',
    state: 'NANE_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  Name: {
    title: 'Pinned',
    state: 'NAME_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  Name: {
    ...Default.args.Name,
    state: 'Name_ARCHIVED',
  },
};