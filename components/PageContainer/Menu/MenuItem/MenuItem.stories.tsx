import { ComponentMeta, Story } from "@storybook/react";
import { IoPeopleCircle } from "react-icons/io5";

import MenuItem from "./MenuItem";
import { MenuItemProps } from "./MenuItem.models";

export default {
  title: "Container/Menu/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: <IoPeopleCircle /> };
export const Closed = Template.bind({});
Closed.args = { children: <IoPeopleCircle />, closed: true };
