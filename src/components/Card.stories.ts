import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './Card.vue';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    title: "this is story card",
    subText: "Sub Text for test",
    content: "this is content"
  },
};

export const Secondary: Story = {
    args: {
      title: "this is story card 2",
      subText: "Sub Text for test 2",
      content: "this is content 2",
      btn1Text: "Button",
      btn2Text: "Button2"
    },
  };