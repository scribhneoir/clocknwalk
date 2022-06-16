import { ComponentMeta, Story } from "@storybook/react";

import Menu from "./Menu";
import { MenuProps } from "./Menu.models";

export default {
  title: "Container/Menu/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = { closed: false };
export const Closed = Template.bind({});
Closed.args = { closed: true };
