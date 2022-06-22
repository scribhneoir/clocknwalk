import { ComponentMeta, Story } from "@storybook/react";

import PageContainer from "./PageContainer";
import { PageContainerProps } from "./PageContainer.models";

export default {
  title: "Container/PageContainer",
  component: PageContainer,
} as ComponentMeta<typeof PageContainer>;

const Template: Story<PageContainerProps> = (args) => (
  <PageContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
