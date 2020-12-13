import React from 'react';

import NameList from './NameList';
import * as NameStories from '../text/Name.stories';


// default 선언
export default {
    component: NameList,
    title: 'NameList',
    decorators: [story => <div style={{ padding: '3rem'}}>{story()}</div>],
};

const Template = args => <NameList {...args} />;

export const Default = Template.bind({});
Default.args = {

    names: [
        { ...NameStories.Default.args.name, id: '1', title: 'Name 1'},
        { ...NameStories.Default.args.name, id: '2', title: 'Name 2'},
        { ...NameStories.Default.args.name, id: '3', title: 'Name 3'},
        { ...NameStories.Default.args.name, id: '4', title: 'Name 4'},
        { ...NameStories.Default.args.name, id: '5', title: 'Name 5'},
        { ...NameStories.Default.args.name, id: '6', title: 'Name 6'},
        { ...NameStories.Default.args.name, id: '7', title: 'Name 7'},
    ],
};

export const WithPinnedNames = Template.bind({});
WithPinnedNames.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  names: [
    ...Default.args.names.slice(0, 5),
    { id: '8', title: 'name 6 (pinned)', state: 'NAME_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  names: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
