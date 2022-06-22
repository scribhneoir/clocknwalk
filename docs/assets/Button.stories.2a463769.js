var c=Object.defineProperty;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var e=(n,t,o)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,a=(n,t)=>{for(var o in t||(t={}))m.call(t,o)&&e(n,o,t[o]);if(r)for(var o of r(t))l.call(t,o)&&e(n,o,t[o]);return n};import{B as s}from"./Button.5bb66130.js";import{j as p}from"./jsx-runtime.2243d797.js";import"./Text.2cad5b79.js";import"./index.4eaab5d2.js";var x={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import Button from "./Button";
import { ButtonProps } from "./Button.models";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Button",
};
export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  children: "Button",
};
`,locationsMap:{primary:{startLoc:{col:37,line:11},endLoc:{col:67,line:11},startBody:{col:37,line:11},endBody:{col:67,line:11}},secondary:{startLoc:{col:37,line:11},endLoc:{col:67,line:11},startBody:{col:37,line:11},endBody:{col:67,line:11}}}}},title:"Atoms/Button",component:s};const i=n=>p(s,a({},n)),d=i.bind({});d.args={primary:!0,children:"Button"};const y=i.bind({});y.args={primary:!1,children:"Button"};const P=["Primary","Secondary"];export{d as Primary,y as Secondary,P as __namedExportsOrder,x as default};
//# sourceMappingURL=Button.stories.2a463769.js.map
