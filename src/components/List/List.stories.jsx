import React from 'react';
import { List } from './List';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/bWhrf5zKPkE46jxQ6KnwyL/H_2501_design-resources-(Copy)',
      componentId: '94:17642',
    },
  },
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};

export const Bordered = Template.bind({});
Bordered.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  variant: 'bordered',
};

export const Striped = Template.bind({});
Striped.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  variant: 'striped',
}; 