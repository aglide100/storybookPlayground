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


export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='Secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>


//export const Primary = Template.bind({});
//Primary.args = {
//  primary: true,
//  label: 'Hello',
//};
//
//export const Secondary = Template.bind({});
//Secondary.args = {
//  label: 'Secondary',
//};
//
//export const success = Template.bind({});
//Large.args = {
//  size: 'large',
//  label: 'success',
//};
//
//export const danger = Template.bind({});
//Small.args = {
//  size: 'small',
//  label: 'danger',
//};
//