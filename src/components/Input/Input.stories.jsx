import React from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/bWhrf5zKPkE46jxQ6KnwyL/H_2501_design-resources-(Copy)',
      componentId: '2004:7325',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  label: 'Label',
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Enter text...',
  label: 'Label',
  error: 'This field is required',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Enter password...',
  label: 'Password',
}; 