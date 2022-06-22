var i=Object.defineProperty;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?i(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,l=(e,o)=>{for(var t in o||(o={}))d.call(o,t)&&r(e,t,o[t]);if(n)for(var t of n(o))c.call(o,t)&&r(e,t,o[t]);return e};import{T as s}from"./Text.2cad5b79.js";import{j as m}from"./jsx-runtime.2243d797.js";import"./index.4eaab5d2.js";var B={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import Text from "./Text";
import { TextProps } from "./Text.models";

export default {
  title: "Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bold: false,
  children: "Text",
};
export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  children: "Text",
};
`,locationsMap:{primary:{startLoc:{col:35,line:11},endLoc:{col:63,line:11},startBody:{col:35,line:11},endBody:{col:63,line:11}},bold:{startLoc:{col:35,line:11},endLoc:{col:63,line:11},startBody:{col:35,line:11},endBody:{col:63,line:11}}}}},title:"Atoms/Text",component:s};const a=e=>m(s,l({},e)),p=a.bind({});p.args={bold:!1,children:"Text"};const x=a.bind({});x.args={bold:!0,children:"Text"};const g=["Primary","Bold"];export{x as Bold,p as Primary,g as __namedExportsOrder,B as default};
//# sourceMappingURL=Text.stories.b45241fa.js.map
