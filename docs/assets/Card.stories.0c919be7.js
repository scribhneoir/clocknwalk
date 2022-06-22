var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var e=(t,o,r)=>o in t?l(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(t,o)=>{for(var r in o||(o={}))c.call(o,r)&&e(t,r,o[r]);if(n)for(var r of n(o))m.call(o,r)&&e(t,r,o[r]);return t};import{C as s}from"./Card.02a716c2.js";import{j as p}from"./jsx-runtime.2243d797.js";import"./iframe.3acf8e6e.js";import"./index.4eaab5d2.js";var x={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import Card from "./Card";
import { CardProps } from "./Card.models";

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const A = Template.bind({});
A.args = {};

export const B = Template.bind({});
B.args = {};
`,locationsMap:{a:{startLoc:{col:35,line:11},endLoc:{col:63,line:11},startBody:{col:35,line:11},endBody:{col:63,line:11}},b:{startLoc:{col:35,line:11},endLoc:{col:63,line:11},startBody:{col:35,line:11},endBody:{col:63,line:11}}}}},title:"Atoms/Card",component:s};const d=t=>p(s,a({},t)),i=d.bind({});i.args={};const C=d.bind({});C.args={};const A=["A","B"];export{i as A,C as B,A as __namedExportsOrder,x as default};
//# sourceMappingURL=Card.stories.0c919be7.js.map
