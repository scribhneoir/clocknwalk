import { ComponentMeta, Story } from "@storybook/react";

import Availabillity from "./Availabillity";
import { AvailabillityProps } from "./Availabillity.models";

export default {
  title: "Pages/Availabillity",
  component: Availabillity,
} as ComponentMeta<typeof Availabillity>;

const Template: Story<AvailabillityProps> = (args) => (
  <Availabillity {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
